import { useLanguage } from '../i18n';
import { asset } from '../utils/asset';
import { IconArrowRight, IconMail } from './Icons';
import './Export.css';

export default function Export() {
  const { t } = useLanguage();
  return <section className="section-pad export-section" id="export">
    <div className="container export-grid">
      <div><span className="eyebrow">{t.export.eyebrow}</span><h2 className="section-title">{t.export.title}</h2><p className="section-desc">{t.export.desc}</p><div className="export-contact"><small>{t.export.proBadge}</small><p>{t.export.proNote}</p><a className="btn btn-primary" href="mailto:info@andre-neveu.fr?subject=Demande%20professionnelle"><IconMail size={15} />{t.export.proBtn}<IconArrowRight size={15} /></a></div></div>
      <ol className="country-list">{t.export.countries.map((country, index) => <li key={country.name}><span>{String(index + 1).padStart(2,'0')}</span><img src={asset(country.flag)} alt="" width="42" height="28" loading="lazy" /><strong>{country.name}</strong></li>)}</ol>
    </div>
  </section>;
}
