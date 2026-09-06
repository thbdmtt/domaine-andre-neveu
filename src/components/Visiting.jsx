import { useLanguage } from '../i18n';
import { IconClock, IconMail, IconMapPin, IconPhone } from './Icons';
import './Visiting.css';

export default function Visiting() {
  const { t } = useLanguage();
  const maps = 'https://www.google.com/maps/search/?api=1&query=47.3379938490761,2.8032034635543823';
  return <section className="section-pad visiting-section" id="visiter">
    <div className="container">
      <div className="section-header"><span className="eyebrow">{t.visiter.eyebrow}</span><h2 className="section-title">{t.visiter.title}</h2><p className="section-desc">{t.visiter.desc}</p></div>
      <div className="visit-layout">
        <article><IconClock size={22} /><small>01</small><h3>{t.visiter.hoursTitle}</h3><p>{t.visiter.hoursWeek}</p><p>{t.visiter.hoursSat}</p><p>{t.visiter.hoursSun}</p><em>{t.visiter.appointmentNote}</em></article>
        <article><IconMapPin size={22} /><small>02</small><h3>{t.visiter.addressTitle}</h3><address>{t.visiter.address}</address><p>{t.visiter.gps}</p><a className="text-link" href={maps} target="_blank" rel="noreferrer">{t.visiter.mapBtn} <span aria-hidden="true">↗</span></a></article>
        <article className="visit-contact"><IconPhone size={22} /><small>03</small><h3>{t.visiter.contactCardTitle}</h3><p>{t.visiter.contactCardDesc}</p><div><a className="btn btn-primary" href="tel:0248540448"><IconPhone size={15} />{t.visiter.callBtn}</a><a className="btn btn-ghost" href="mailto:chavignol@orange.fr"><IconMail size={15} />{t.visiter.emailBtn}</a></div></article>
      </div>
    </div>
  </section>;
}
