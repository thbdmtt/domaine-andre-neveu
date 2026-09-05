import { useLanguage } from "../i18n";
import { asset } from "../utils/asset";
import { IconMail } from "./Icons";
import "./Export.css";

export default function Export() {
  const { t } = useLanguage();

  return (
    <section className="section-pad export-section" id="export">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t.export.eyebrow}</span>
          <h2 className="section-title">{t.export.title}</h2>
          <p className="section-desc">{t.export.desc}</p>
        </div>

        <div className="export-flags-grid">
          {t.export.countries.map((c, idx) => (
            <div className="country-card" key={idx}>
              <img src={asset(c.flag)} alt={c.name} className="flag-img" width="48" height="32" loading="lazy" />
              <span className="country-name">{c.name}</span>
            </div>
          ))}
        </div>

        <div className="export-pro-box">
          <div className="pro-inner">
            <span className="pro-badge">Espace Professionnels</span>
            <p className="pro-text">{t.export.proNote}</p>
            <a href="mailto:info@andre-neveu.fr?subject=Demande%20de%20fiches%20techniques%20et%20conditions%20commerciales" className="btn btn-primary" style={{ gap: "0.6rem" }}>
              <IconMail size={15} />
              <span>Contacter le service export</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
