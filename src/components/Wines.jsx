import { useState } from "react";
import { useLanguage } from "../i18n";
import { order, winesByLanguage } from "../data/wines";
import { asset } from "../utils/asset";
import { IconPhone } from "./Icons";
import "./Wines.css";

export default function Wines() {
  const { language, t } = useLanguage();
  const wines = winesByLanguage[language];
  const [selectedId, setSelectedId] = useState("monts-damnes");
  const [colorFilter, setColorFilter] = useState("all");

  const filteredOrder = order.filter(id => {
    if (colorFilter === "all") return true;
    return wines[id].color === colorFilter;
  });

  const activeWine = wines[selectedId] || wines[filteredOrder[0]];

  return (
    <section className="section-pad wines-section surface-light" id="vins" aria-label="Catalogue des vins">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t.vins.eyebrow}</span>
          <h2 className="section-title">{t.vins.title}</h2>
          <p className="section-desc">{t.vins.desc}</p>

          <div className="wine-filters-wrapper">
            <div className="wine-filters" role="group" aria-label="Filtrer par couleur">
              <button
                type="button"
                className={`filter-btn ${colorFilter === "all" ? "active" : ""}`}
                onClick={() => setColorFilter("all")}
              >
                {t.vins.filterAll}
              </button>
              <button
                type="button"
                className={`filter-btn ${colorFilter === "blanc" ? "active" : ""}`}
                onClick={() => setColorFilter("blanc")}
              >
                {t.vins.filterBlanc} (4)
              </button>
              <button
                type="button"
                className={`filter-btn ${colorFilter === "rouge" ? "active" : ""}`}
                onClick={() => setColorFilter("rouge")}
              >
                {t.vins.filterRouge} (2)
              </button>
              <button
                type="button"
                className={`filter-btn ${colorFilter === "rose" ? "active" : ""}`}
                onClick={() => setColorFilter("rose")}
              >
                {t.vins.filterRose} (1)
              </button>
            </div>
          </div>
        </div>

        {/* Selected Wine Spotlight Card */}
        <article className="wine-spotlight">
          <div className="spotlight-visual">
            <div className="packshot-stage">
              <img
                src={asset(activeWine.packshot)}
                alt={`Bouteille de ${activeWine.name} - Domaine André Neveu`}
                className="spotlight-bottle-img"
                width="340"
                height="520"
                loading="lazy"
              />
            </div>
            <span className={`spotlight-badge badge-${activeWine.color}`}>
              {activeWine.vintage} · {activeWine.color.toUpperCase()}
            </span>
          </div>

          <div className="spotlight-info">
            <span className="spotlight-kicker">{activeWine.kicker}</span>
            <h3 className="spotlight-name">{activeWine.name}</h3>
            <p className="spotlight-note">{activeWine.note}</p>

            <div className="spotlight-tabs-content">
              <div className="facts-col">
                <h4 className="sub-title">{t.vins.factsTitle}</h4>
                <ul className="facts-list">
                  {activeWine.facts.map(([label, val], idx) => (
                    <li key={idx}>
                      <span className="fact-lbl">{label}</span>
                      <span className="fact-val">{val}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tasting-col">
                <h4 className="sub-title">{t.vins.detailsTitle}</h4>
                <div className="tasting-box">
                  <div className="tasting-item">
                    <span className="t-phase-badge">
                      {language === "fr" ? "Œil" : "Eye"}
                    </span>
                    <div className="t-text">{activeWine.tasting.eye}</div>
                  </div>
                  <div className="tasting-item">
                    <span className="t-phase-badge">
                      {language === "fr" ? "Nez" : "Nose"}
                    </span>
                    <div className="t-text">{activeWine.tasting.nose}</div>
                  </div>
                  <div className="tasting-item">
                    <span className="t-phase-badge">
                      {language === "fr" ? "Bouche" : "Palate"}
                    </span>
                    <div className="t-text">{activeWine.tasting.mouth}</div>
                  </div>
                </div>

                <div className="pairings-box">
                  <span className="pairings-lbl">{t.vins.pairingsTitle} :</span>
                  <div className="pairings-tags">
                    {activeWine.pairings.map((p, idx) => (
                      <span className="p-tag" key={idx}>
                        <span className="p-bullet">◆</span>
                        <span>{p}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="spotlight-actions">
              <a href="#visiter" className="btn btn-primary wine-action-btn">
                {t.vins.contactForPrice}
              </a>
              <a href="tel:0248540448" className="btn btn-ghost wine-action-btn">
                <IconPhone size={15} />
                <span>{t.nav.callUs}</span>
              </a>
            </div>
          </div>
        </article>

        {/* Carousel / Mini thumbnails to pick wine */}
        <div className="wines-thumb-track-wrap">
          <div className="wines-thumb-nav" role="tablist" aria-label="Sélection des cuvées">
            {filteredOrder.map(id => {
              const w = wines[id];
              const isSelected = w.id === activeWine.id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`thumb-wine-btn ${isSelected ? "selected" : ""}`}
                  onClick={() => setSelectedId(id)}
                >
                  <img
                    src={asset(w.bottle)}
                    alt={w.cuvee}
                    className="thumb-bottle"
                    width="60"
                    height="100"
                    loading="lazy"
                  />
                  <span className="thumb-name">{w.cuvee}</span>
                  <span className="thumb-color">{w.color}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
