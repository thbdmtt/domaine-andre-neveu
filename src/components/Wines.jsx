import { useState } from 'react';
import { useLanguage } from '../i18n';
import { order, winesByLanguage } from '../data/wines';
import { asset } from '../utils/asset';
import { IconArrowRight, IconPhone } from './Icons';
import './Wines.css';

const filters = ['all', 'blanc', 'rouge', 'rose'];

export default function Wines() {
  const { language, t } = useLanguage();
  const wines = winesByLanguage[language];
  const [selectedId, setSelectedId] = useState(order[0]);
  const [filter, setFilter] = useState('all');
  const visibleIds = order.filter((id) => filter === 'all' || wines[id].color === filter);
  const activeId = visibleIds.includes(selectedId) ? selectedId : visibleIds[0];
  const wine = wines[activeId];

  const changeFilter = (value) => {
    setFilter(value);
    const first = order.find((id) => value === 'all' || wines[id].color === value);
    if (!order.filter((id) => value === 'all' || wines[id].color === value).includes(selectedId)) setSelectedId(first);
  };

  const filterNames = { all: t.vins.filterAll, blanc: t.vins.filterBlanc, rouge: t.vins.filterRouge, rose: t.vins.filterRose };

  return <section className="section-pad wines-section" id="vins">
    <div className="container">
      <div className="wines-heading">
        <div className="section-header"><span className="eyebrow">{t.vins.eyebrow}</span><h2 className="section-title">{t.vins.title}</h2><p className="section-desc">{t.vins.desc}</p></div>
        <div className="wine-filters" aria-label={t.vins.selectLabel}>{filters.map((item) => <button key={item} type="button" className={filter === item ? 'active' : ''} onClick={() => changeFilter(item)}>{filterNames[item]}</button>)}</div>
      </div>

      <article className="wine-feature">
        <div className="wine-stage">
          <span className="wine-index">{String(order.indexOf(activeId) + 1).padStart(2, '0')}</span>
          <img key={wine.packshot} src={asset(wine.packshot)} alt={`${t.vins.bottleAlt} ${wine.cuvee}`} width="340" height="520" loading="lazy" />
          <span className={`wine-color wine-color-${wine.color}`}>{wine.color}</span>
        </div>
        <div className="wine-content">
          <span className="wine-kicker">{wine.kicker}</span><h3>{wine.cuvee}</h3><p className="wine-note">{wine.note}</p>
          <div className="wine-detail-grid">
            <div><h4>{t.vins.factsTitle}</h4><dl>{wine.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
            <div className="wine-tasting"><h4>{t.vins.detailsTitle}</h4><p><span>{language === 'fr' ? 'Nez' : 'Nose'}</span>{wine.tasting.nose}</p><p><span>{language === 'fr' ? 'Bouche' : 'Palate'}</span>{wine.tasting.mouth}</p><h4>{t.vins.pairingsTitle}</h4><ul>{wine.pairings.slice(0,3).map((pairing) => <li key={pairing}>{pairing}</li>)}</ul></div>
          </div>
          <p className="wine-source-note">{t.vins.archiveNote}</p>
          <div className="wine-actions"><a className="btn btn-primary" href="mailto:chavignol@orange.fr"><span>{t.vins.contactForPrice}</span><IconArrowRight size={15} /></a><a className="btn btn-ghost" href="tel:0248540448"><IconPhone size={15} />{t.nav.callUs}</a></div>
        </div>
      </article>

      <div className="wine-selector" role="tablist" aria-label={t.vins.selectLabel}>{visibleIds.map((id) => { const item = wines[id]; return <button type="button" role="tab" aria-selected={id === activeId} className={id === activeId ? 'active' : ''} onClick={() => setSelectedId(id)} key={id}><img src={asset(item.bottle)} alt="" width="60" height="100" loading="lazy" /><span>{item.cuvee}</span><small>{item.color}</small></button>; })}</div>
    </div>
  </section>;
}
