import { useLanguage } from '../i18n';
import { asset } from '../utils/asset';
import { IconArrowRight } from './Icons';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  return <section className="hero-section" id="hero" aria-labelledby="hero-title">
    <div className="hero-photo"><img src={asset('/media/identity/diapo-accueil-1--3a3c6f9c61.jpg')} alt={t.hero.imageAlt} width="900" height="600" fetchPriority="high" /><span className="hero-photo-caption">Chavignol · Sancerre</span></div>
    <div className="hero-paper">
      <img className="hero-emblem" src={asset('/brand/logo-emblem-on-light.svg')} alt="" width="112" height="88" />
      <span className="eyebrow">{t.hero.eyebrow}</span>
      <h1 id="hero-title">{t.hero.title}</h1><p>{t.hero.sub}</p>
      <div className="hero-actions"><a className="btn btn-primary" href="#vins">{t.hero.ctaWines}<IconArrowRight size={16} /></a><a className="btn btn-ghost" href="#visiter">{t.hero.ctaVisit}</a></div>
    </div>
    <div className="hero-ledger" aria-label={t.ledger.label}>{t.ledger.items.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
  </section>;
}
