# Link-preview cards (1200x630) with the headline baked in, one per language.
# 1. npm run build:verify   2. python3 scripts/og-cards.py   3. serve .next-verify and screenshot og-en.html / og-pl.html
#    at 1200x630, save as public/og/upcoming-wave-og-{en,pl}.jpg, then delete the og-*.html files.
# The background is public/og/upcoming-wave-og.jpg; fonts and CSS come from the build so the card matches the site.
import re, sys
import os
root=os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '.next-verify')
idx=open(f'{root}/index.html').read()
cls=re.search(r'<html[^>]*class="([^"]*)"',idx).group(1)
css=re.search(r'<link rel="stylesheet" href="([^"]*)"',idx).group(1)
variants={
 'en':dict(lead='AI could be the best thing we ever built —',accent='or the worst.',brand='Upcoming Wave',size=62),
 'pl':dict(lead='AI może być najlepszą rzeczą, jaką stworzyliśmy —',accent='albo najgorszą.',brand='Nadchodząca fala',size=56),
}
for k,v in variants.items():
    html=f'''<!doctype html><html class="{cls}"><head><meta charset="utf-8"><link rel="stylesheet" href="{css}">
<style>
html,body{{margin:0;width:1200px;height:630px;overflow:hidden;background:#070b10}}
.og{{position:relative;width:1200px;height:630px;background:url(/og/upcoming-wave-og.jpg) center/cover}}
.og::after{{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,11,16,0) 30%,rgba(7,11,16,.78) 62%,rgba(7,11,16,.96) 100%)}}
.copy{{position:absolute;z-index:1;left:56px;right:56px;bottom:44px;display:grid;gap:26px}}
h1{{margin:0;max-width:1000px;color:#eeece6;font:600 {v["size"]}px/1.0 var(--font-sans);letter-spacing:-0.04em;text-wrap:balance}}
h1 em{{color:#ff6b3d;font:italic 400 1.1em/0.9 var(--font-serif),serif;letter-spacing:-0.02em}}
.row{{display:flex;justify-content:space-between;align-items:center;color:rgba(238,236,230,.8);font:500 16px/1 var(--font-mono),monospace;letter-spacing:.16em;text-transform:uppercase}}
.brand{{display:flex;align-items:center;gap:12px}}
.brand i{{width:14px;height:14px;border-radius:50%;background:#ff6b3d;box-shadow:0 0 0 4px rgba(7,11,16,.8),0 0 0 6px rgba(238,236,230,.7)}}
.url{{text-transform:none;letter-spacing:.06em;color:#eeece6}}
</style></head><body><div class="og"><div class="copy">
<h1>{v["lead"]} <em>{v["accent"]}</em></h1>
<div class="row"><span class="brand"><i></i>{v["brand"]}</span><span class="url">upcomingwave.org</span></div>
</div></div></body></html>'''
    open(f'{root}/og-{k}.html','w').write(html)
print('ok')
