import { useLanguage } from '../i18n';
import { asset } from '../utils/asset';
import './Domaine.css';

export default function Domaine() {
  const { t } = useLanguage();
  return <section className="section-pad domaine-section" id="domaine">
    <div className="container domaine-grid">
      <div className="domaine-copy">
        <span className="eyebrow">{t.domaine.eyebrow}</span>
        <h2 className="section-title">{t.domaine.title}</h2>
        <div className="domaine-body"><p>{t.domaine.p1}</p><p>{t.domaine.p2}</p></div>
        <div className="domaine-mark"><img src={asset('/brand/logo-emblem-on-light.svg')} alt="" width="70" height="55" /><span>{t.domaine.marker}</span></div>
      </div>
      <figure className="domaine-photo-large">
        <img src={asset('/media/identity/diapo-accueil-2--25206b30ba.jpg')} alt={t.domaine.captionMain} width="900" height="600" loading="lazy" />
        <figcaption><span>01</span>{t.domaine.captionMain}</figcaption>
      </figure>
      <figure className="domaine-photo-small">
        <img src={asset('/media/terroir/terroir-3z--e9fd725ab5.jpg')} alt={t.domaine.captionSecondary} width="950" height="435" loading="lazy" />
        <figcaption><span>02</span>{t.domaine.captionSecondary}</figcaption>
      </figure>
    </div>
  </section>;
}
