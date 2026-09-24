'use client';

import { LanguagePicker } from '@features/upcomingWave/components/LanguagePicker/LanguagePicker';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { collectSources, getSourceNumber } from '@features/upcomingWave/utils/collectSources';
import { DEFAULT_LOCALE, isLocale } from '@routes/locales';
import { paths } from '@routes/paths';

// Show the domain only when the label doesn't already name it.
const hostLabel = (label: string, url: string) => {
  const host = new URL(url).hostname.replace('www.', '');
  return label.toLowerCase().includes(host.split('.')[0]) ? '' : host;
};

export const SourcesPage = () => {
  const content = useContent();
  const { site, ui } = content;
  const page = site.sourcesPage;
  const locale = isLocale(ui.lang) ? ui.lang : DEFAULT_LOCALE;

  return (
    <main className="uw uw-sources">
      <header className="uw-header">
        <a href={paths.home(locale)} className="uw-brand"><span aria-hidden="true" />{ui.brand}</a>
        <LanguagePicker locale={locale} page="sources" label={ui.languagePicker} />
      </header>

      <article className="uw-sources-body">
        <a className="uw-text-button" href={paths.home(locale)}>{page.back}</a>
        <h1 className="uw-title">{page.title}</h1>
        <p className="uw-sources-lead">{page.lead}</p>

        <section aria-labelledby="method-title">
          <h2 id="method-title" className="uw-block-title">{page.methodTitle}</h2>
          <ul className="uw-sources-method">{page.method.map((line) => <li key={line}>{line}</li>)}</ul>
          <p className="uw-sources-meta">{page.updated} {page.correction} <a href={site.footer.author.url} target="_blank" rel="noopener noreferrer">{site.footer.author.handle}</a></p>
        </section>

        <section aria-labelledby="list-title">
          <h2 id="list-title" className="uw-block-title">{page.listTitle}</h2>
          {collectSources(content).map((group) => (
            <div key={group.id} className="uw-sources-group">
              <h3><a href={`${paths.home(locale)}${paths.section(group.id)}`}>{group.title}</a></h3>
              <ol>
                {group.sources.map((source) => {
                  const number = getSourceNumber(content, source);
                  return (
                    <li key={source.url ?? source.label} id={paths.sourceAnchor(number).slice(1)} value={number}>
                      {source.url
                        ? <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} <span>{hostLabel(source.label, source.url)} ↗</span></a>
                        : <span>{source.label} <span>{page.noLink}</span></span>}
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
};
