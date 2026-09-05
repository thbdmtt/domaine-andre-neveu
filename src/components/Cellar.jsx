import { useLanguage } from "../i18n";
import { asset } from "../utils/asset";
import "./Cellar.css";

export default function Cellar() {
  const { t } = useLanguage();

  const cellarPhotos = [
    { src: "/media/cellar/chai-10z--88aaf0866c.jpg", title: "Élevage en fûts de chêne français" },
    { src: "/media/cellar/chai-4z--2f2833e07a.jpg", title: "Cuverie inox thermo-régulée" },
    { src: "/media/cellar/chai-11z--b9d02fe35a.jpg", title: "Vieillissement des cuvées de garde" },
    { src: "/media/cellar/chai-3z--57e47a5bd4.jpg", title: "Précision des fermentations parcellaires" }
  ];

  return (
    <section className="section-pad cellar-section" id="chai">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t.chai.eyebrow}</span>
          <h2 className="section-title">{t.chai.title}</h2>
          <p className="section-desc">{t.chai.p1}</p>
        </div>

        <div className="cellar-grid">
          {cellarPhotos.map((photo, idx) => (
            <div className="cellar-card" key={idx}>
              <img src={asset(photo.src)} alt={photo.title} className="cellar-img" />
              <div className="cellar-caption">
                <span>{photo.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cellar-footer-note">
          <p>{t.chai.p2}</p>
        </div>
      </div>
    </section>
  );
}
