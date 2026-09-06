import { useLanguage } from '../i18n';
import { asset } from '../utils/asset';
import './Cellar.css';

const photos = ['chai-2z--a3a8db93ee.jpg', 'chai-5z--e50b99f562.jpg', 'chai-10z--88aaf0866c.jpg'];

export default function Cellar() {
  const { t } = useLanguage();
  return <section className="section-pad cellar-section" id="chai">
    <div className="container cellar-grid">
      <div className="cellar-copy"><span className="eyebrow">{t.chai.eyebrow}</span><h2 className="section-title">{t.chai.title}</h2><p>{t.chai.p1}</p><p>{t.chai.p2}</p><small>{t.chai.caption}</small></div>
      <div className="cellar-gallery">{photos.map((photo, index) => <figure key={photo}><img src={asset(`/media/cellar/${photo}`)} alt={`${t.chai.caption} ${index + 1}`} width="640" height="420" loading="lazy" /><figcaption>0{index + 1}</figcaption></figure>)}</div>
    </div>
  </section>;
}
