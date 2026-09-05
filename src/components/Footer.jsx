import { useLanguage } from "../i18n";
import { asset } from "../utils/asset";
import { IconMapPin, IconPhone, IconMail } from "./Icons";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img
                src={asset("/brand/logo-emblem-gold.svg")}
                alt="Emblème Domaine André Neveu"
                className="footer-emblem"
                width="40"
                height="32"
              />
              <span className="footer-brand-name">Domaine André Neveu</span>
            </div>
            <p className="footer-tagline">
              Vignerons récoltants à Chavignol depuis plusieurs générations. Grands terroirs de Sancerre : Les Monts Damnés, Silex et Caillottes.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#domaine">{t.nav.domaine}</a></li>
              <li><a href="#terroirs">{t.nav.terroirs}</a></li>
              <li><a href="#vins">{t.nav.vins}</a></li>
              <li><a href="#chai">{t.nav.chai}</a></li>
              <li><a href="#visiter">{t.nav.visiter}</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">Caveau & Contact</h4>
            <p className="footer-contact-item">
              <IconMapPin size={14} style={{ marginRight: 6, verticalAlign: "middle", color: "var(--or-sceau-clair)" }} />
              <span>Chavignol, 18300 Sancerre</span>
            </p>
            <p className="footer-contact-item">
              <IconPhone size={14} style={{ marginRight: 6, verticalAlign: "middle", color: "var(--or-sceau-clair)" }} />
              <a href="tel:0248540448">02 48 54 04 48</a>
            </p>
            <p className="footer-contact-item">
              <IconMail size={14} style={{ marginRight: 6, verticalAlign: "middle", color: "var(--or-sceau-clair)" }} />
              <a href="mailto:info@andre-neveu.fr">info@andre-neveu.fr</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-warning">
            {t.footer.legalNotice}
          </div>
          <div className="footer-copy-row">
            <span>{t.footer.copyright}</span>
            <span>{t.footer.credits}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
