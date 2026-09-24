# Link-preview cards (1200x630) with the headline baked in, one per language. No build needed.
# 1. python3 scripts/og-cards.py            -> writes /tmp/og-cards/og-<locale>.html
# 2. screenshot each file at 1200x630 (e.g. Playwright, wait for document.fonts.ready)
#    and save as public/og/upcoming-wave-og-<locale>.jpg (JPEG ~q86).
# Headline and site name come from content/<locale>/site.ts (meta.home.title, meta.siteName); the
# background is public/og/upcoming-wave-og.jpg. Fonts load from Google Fonts to match the site.
import html
import os
import re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
CONTENT = os.path.join(ROOT, 'src/features/upcomingWave/content')
BACKGROUND = os.path.abspath(os.path.join(ROOT, 'public/og/upcoming-wave-og.jpg'))
OUT = '/tmp/og-cards'
LOCALES = ['en', 'pl', 'es', 'pt', 'de', 'fr', 'ja']
DASHES = [' - ', ' — ', ' – ']

FONTS = ('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600&family=Instrument+Serif:ital@1'
         '&family=JetBrains+Mono:wght@500&family=Noto+Sans+JP:wght@600&family=Noto+Serif+JP:wght@500&display=block')


def ts_string(source, pattern):
    match = re.search(pattern + r"\s*'((?:[^'\\]|\\.)*)'", source)
    return match.group(1).replace("\\'", "'") if match else ''


def page_copy(locale):
    source = open(os.path.join(CONTENT, locale, 'site.ts'), encoding='utf-8').read()
    meta = source[source.index('meta:'):]
    title = ts_string(meta[meta.index('home:'):], r'title:')
    name = ts_string(meta, r'siteName:')
    for dash in DASHES:
        if dash in title:
            lead, accent = title.split(dash, 1)
            return dict(lead=lead + dash.rstrip(), accent=accent, brand=name, title=title)
    return dict(lead=title, accent='', brand=name, title=title)


def card(locale, copy):
    ja = locale == 'ja'
    sans = "'Noto Sans JP', sans-serif" if ja else "'Inter Tight', sans-serif"
    serif = "'Noto Serif JP', serif" if ja else "'Instrument Serif', serif"
    size = 60 if len(copy['title']) < 60 else 52 if len(copy['title']) < 80 else 46
    accent_end = '' if copy['accent'].endswith(('.', '。', '!', '?')) or ja else '.'
    return f'''<!doctype html><html lang="{locale}"><head><meta charset="utf-8">
<link rel="stylesheet" href="{FONTS}">
<style>
html,body{{margin:0;width:1200px;height:630px;overflow:hidden;background:#070b10}}
.og{{position:relative;width:1200px;height:630px;background:url('file://{BACKGROUND}') center/cover}}
.og::after{{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,11,16,0) 28%,rgba(7,11,16,.8) 60%,rgba(7,11,16,.96) 100%)}}
.copy{{position:absolute;z-index:1;left:56px;right:56px;bottom:44px;display:grid;gap:26px}}
h1{{margin:0;max-width:1040px;color:#eeece6;font:600 {size}px/1.04 {sans};letter-spacing:{'0' if ja else '-0.04em'};text-wrap:balance}}
h1 em{{color:#ff6b3d;font:{'500' if ja else 'italic 400'} 1.08em/0.95 {serif};letter-spacing:{'0' if ja else '-0.02em'}}}
.row{{display:flex;justify-content:space-between;align-items:center;color:rgba(238,236,230,.8);font:500 16px/1 'JetBrains Mono',monospace;letter-spacing:.16em;text-transform:uppercase}}
.brand{{display:flex;align-items:center;gap:12px}}
.brand i{{width:14px;height:14px;border-radius:50%;background:#ff6b3d;box-shadow:0 0 0 4px rgba(7,11,16,.8),0 0 0 6px rgba(238,236,230,.7)}}
.url{{text-transform:none;letter-spacing:.06em;color:#eeece6}}
</style></head><body><div class="og"><div class="copy">
<h1>{html.escape(copy["lead"])} <em>{html.escape(copy["accent"])}{accent_end}</em></h1>
<div class="row"><span class="brand"><i></i>{html.escape(copy["brand"])}</span><span class="url">upcomingwave.org</span></div>
</div></div></body></html>'''


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for locale in LOCALES:
        copy = page_copy(locale)
        with open(os.path.join(OUT, f'og-{locale}.html'), 'w', encoding='utf-8') as file:
            file.write(card(locale, copy))
        print(locale, '|', copy['title'])
