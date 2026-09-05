import { useLanguage } from "../i18n";
import { asset } from "../utils/asset";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-section" id="hero" aria-label="Présentation du Domaine">
      <div className="hero-bg-overlay" aria-hidden="true"></div>
      <img
        src={asset("/media/identity/diapo-accueil-1--3a3c6f9c61.jpg")}
        alt="Vignobles du Domaine André Neveu surplombant le village de Chavignol"
        className="hero-bg-image"
        width="1440"
        height="900"
        fetchPriority="high"
      />

      <div className="hero-content">
        <div className="hero-emblem-wrap">
          <img
            src={asset("/brand/logo-emblem-gold.svg")}
            alt="Blason et sceau du Domaine André Neveu"
            className="hero-emblem"
            width="84"
            height="66"
          />
        </div>

        <span className="eyebrow hero-eyebrow">{t.hero.eyebrow}</span>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-sub">{t.hero.sub}</p>

        <div className="hero-cta-row">
          <a href="#vins" className="btn btn-primary hero-btn">
            {t.hero.ctaWines}
          </a>
          <a href="#visiter" className="btn btn-ghost hero-btn">
            {t.hero.ctaVisit}
          </a>
        </div>
      </div>

      <div className="hero-ledger">
        <div className="ledger-grid">
          {t.ledger.items.map((item, idx) => (
            <div className="ledger-item" key={idx}>
              <span className="ledger-value">{item.value}</span>
              <span className="ledger-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
