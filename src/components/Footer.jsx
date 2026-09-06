import { useLanguage } from '../i18n';
import { asset } from '../utils/asset';
import { IconMail, IconMapPin, IconPhone } from './Icons';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  return <footer className="footer-main"><div className="container">
    <div className="footer-top"><div className="footer-brand"><img src={asset('/brand/logo-emblem-on-dark.svg')} alt="" width="86" height="68" /><h2>Domaine<br />André Neveu</h2><p>{t.footer.description}</p></div><div className="footer-links"><a href="#domaine">{t.nav.domaine}</a><a href="#terroirs">{t.nav.terroirs}</a><a href="#vins">{t.nav.vins}</a><a href="#chai">{t.nav.chai}</a><a href="#visiter">{t.nav.visiter}</a></div><address><p><IconMapPin size={15} />Chavignol, 18300 Sancerre</p><p><IconPhone size={15} /><a href="tel:0248540448">{t.nav.callUs}</a></p><p><IconMail size={15} /><a href="mailto:chavignol@orange.fr">chavignol@orange.fr</a></p></address></div>
    <div className="footer-bottom"><span>{t.footer.legalNotice}</span><span>{t.footer.copyright} · {t.footer.credits}</span></div>
  </div></footer>;
}
