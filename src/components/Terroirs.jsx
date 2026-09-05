import { useState } from "react";
import { useLanguage } from "../i18n";
import { asset } from "../utils/asset";
import "./Terroirs.css";

export default function Terroirs() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("damnes");

  const terroirsData = [
    {
      id: "damnes",
      data: t.terroirs.tabs.damnes,
      rockImage: "/media/terroir/terroir-argilocalcaire--bda42312e7.jpg",
      landscapeImage: "/media/terroir/terroir-1z--6c26e51024.jpg",
      badge: "Terres Blanches",
      profile: "Puissance, structure & longue garde"
    },
    {
      id: "caillottes",
      data: t.terroirs.tabs.caillottes,
      rockImage: "/media/terroir/terroir-caillotes--a4e206a6cd.jpg",
      landscapeImage: "/media/terroir/terroir-2z--1bbc2d7a9f.jpg",
      badge: "Calcaires Caillottes",
      profile: "Vivacité, fraîcheur & éclat aromatique"
    },
    {
      id: "silex",
      data: t.terroirs.tabs.silex,
      rockImage: "/media/terroir/terroir-silex--52c9be3899.jpg",
      landscapeImage: "/media/terroir/terroir-1z--aba68e516c.jpg",
      badge: "Argiles à Silex",
      profile: "Minéralité fumée & tension 'pierre à fusil'"
    }
  ];

  const current = terroirsData.find(d => d.id === activeTab);

  return (
    <section className="section-pad terroirs-section" id="terroirs" aria-label="Terroirs du domaine">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t.terroirs.eyebrow}</span>
          <h2 className="section-title">{t.terroirs.title}</h2>
          <p className="section-desc">{t.terroirs.intro}</p>
        </div>

        <div className="terroirs-tabs-wrapper">
          <div className="terroirs-tabs" role="tablist">
            {terroirsData.map(item => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeTab === item.id}
                className={`terroir-tab-btn ${activeTab === item.id ? "active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="tab-title">{item.data.title}</span>
                <span className="tab-sub">{item.data.sub}</span>
              </button>
            ))}
          </div>
        </div>

        <article className="terroir-display-card">
          <div className="terroir-info-side">
            <span className="badge badge-gold">{current.badge}</span>
            <h3 className="terroir-active-title">{current.data.title}</h3>
            <p className="terroir-active-desc">{current.data.desc}</p>
            
            <div className="terroir-profile-box">
              <span className="profile-label">Signature en dégustation :</span>
              <span className="profile-val">{current.profile}</span>
            </div>

            <div className="rock-sample-row">
              <img
                src={asset(current.rockImage)}
                alt={`Échantillon minéral de sol ${current.data.title}`}
                className="rock-thumb"
                width="60"
                height="60"
                loading="lazy"
              />
              <span className="rock-caption">Photographie minérale du sol prélevé sur la parcelle</span>
            </div>
          </div>

          <div className="terroir-visual-side">
            <img
              src={asset(current.landscapeImage)}
              alt={`Parcelle de vigne sur le terroir ${current.data.title}`}
              className="terroir-landscape"
              width="600"
              height="440"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
