import { useLanguage } from "../i18n";
import { asset } from "../utils/asset";
import "./Domaine.css";

export default function Domaine() {
  const { t } = useLanguage();

  return (
    <section className="section-pad domaine-section" id="domaine">
      <div className="container">
        <div className="domaine-grid">
          <div className="domaine-text-col">
            <span className="eyebrow">{t.domaine.eyebrow}</span>
            <h2 className="section-title">{t.domaine.title}</h2>
            <p className="domaine-p">{t.domaine.p1}</p>
            <p className="domaine-p">{t.domaine.p2}</p>

            <blockquote className="domaine-quote">
              {t.domaine.quote}
            </blockquote>

            <div className="domaine-signature-row">
              <img
                src={asset("/brand/logo-emblem-gold.svg")}
                alt="Sceau Neveu"
                className="domaine-sig-emblem"
              />
              <div>
                <span className="sig-name">Domaine André Neveu</span>
                <span className="sig-role">Vignerons Récoltants · Chavignol</span>
              </div>
            </div>
          </div>

          <div className="domaine-visual-col">
            <div className="visual-composition">
              <div className="main-photo-frame">
                <img
                  src={asset("/media/identity/diapo-accueil-2--25206b30ba.jpg")}
                  alt="Vignes de Chavignol"
                  className="domaine-photo-main"
                />
              </div>
              <div className="secondary-photo-frame">
                <img
                  src={asset("/media/terroir/terroir-3z--e9fd725ab5.jpg")}
                  alt="Pente des Monts Damnés"
                  className="domaine-photo-sec"
                />
                <span className="photo-badge">Chavignol · 18300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
