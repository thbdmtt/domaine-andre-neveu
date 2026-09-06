import { useState } from 'react';
import { useLanguage } from '../i18n';
import { asset } from '../utils/asset';
import './Terroirs.css';

const visuals = {
  damnes: ['/media/terroir/terroir-argilocalcaire--bda42312e7.jpg', '/media/terroir/terroir-1z--6c26e51024.jpg'],
  caillottes: ['/media/terroir/terroir-caillotes--a4e206a6cd.jpg', '/media/terroir/terroir-2z--1bbc2d7a9f.jpg'],
  silex: ['/media/terroir/terroir-silex--52c9be3899.jpg', '/media/terroir/terroir-1z--aba68e516c.jpg']
};

export default function Terroirs() {
  const { t } = useLanguage();
  const [active, setActive] = useState('damnes');
  const item = t.terroirs.tabs[active];
  return <section className="section-pad terroirs-section" id="terroirs">
    <div className="container">
      <div className="section-header"><span className="eyebrow">{t.terroirs.eyebrow}</span><h2 className="section-title">{t.terroirs.title}</h2><p className="section-desc">{t.terroirs.intro}</p></div>
      <div className="terroir-tabs" role="tablist" aria-label={t.terroirs.title}>{Object.entries(t.terroirs.tabs).map(([id, data], index) => <button key={id} type="button" role="tab" aria-selected={active === id} className={active === id ? 'active' : ''} onClick={() => setActive(id)}><small>0{index + 1}</small><span>{data.title}</span><em>{data.sub}</em></button>)}</div>
      <article className="terroir-panel">
        <div className="terroir-image"><img key={visuals[active][1]} src={asset(visuals[active][1])} alt={`${t.terroirs.landscape} — ${item.title}`} width="950" height="435" loading="lazy" /></div>
        <div className="terroir-copy">
          <img key={visuals[active][0]} src={asset(visuals[active][0])} alt={`${t.terroirs.sample} — ${item.title}`} width="100" height="100" loading="lazy" />
          <span>{item.sub}</span><h3>{item.title}</h3><p>{item.desc}</p><strong>{item.note}</strong>
        </div>
      </article>
    </div>
  </section>;
}
