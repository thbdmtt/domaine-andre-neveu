import { useState, useEffect } from "react";
import { useLanguage } from "../i18n";
import { asset } from "../utils/asset";
import { IconPhone, IconMapPin, IconArrowRight } from "./Icons";
import "./Nav.css";

export default function Nav() {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;

    function updateHeader() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Au tout début de la page (les 80 premiers pixels) : toujours visible
      if (currentScrollY <= 80) {
        setVisible(true);
        setScrolled(currentScrollY > 20);
      } else {
        setScrolled(true);
        // Filtrer les micro-déplacements (< 8px) pour éviter les sautillements
        if (Math.abs(scrollDelta) > 8) {
          if (scrollDelta > 0) {
            // Défilement vers le bas -> masquer la barre pour libérer l'écran
            setVisible(false);
          } else {
            // Défilement vers le haut -> faire réapparaître immédiatement la barre
            setVisible(true);
          }
        }
      }

      lastScrollY = Math.max(0, currentScrollY);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on ESC key
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  const navItems = [
    {
      num: "01",
      href: "#domaine",
      title: t.nav.domaine,
      sub: language === "fr" ? "Héritage à Chavignol & Monts Damnés" : "Heritage in Chavignol & Monts Damnés"
    },
    {
      num: "02",
      href: "#terroirs",
      title: t.nav.terroirs,
      sub: language === "fr" ? "Terres Blanches, Silex & Caillottes" : "Kimmeridgian, Flint & Limestone"
    },
    {
      num: "03",
      href: "#vins",
      title: t.nav.vins,
      sub: language === "fr" ? "Collection des 7 Cuvées Artisanales" : "Collection of 7 Artisan Cuvées"
    },
    {
      num: "04",
      href: "#chai",
      title: t.nav.chai,
      sub: language === "fr" ? "Cuverie inox & Élevage en Fûts de Chêne" : "Stainless steel & French oak aging"
    },
    {
      num: "05",
      href: "#visiter",
      title: t.nav.visiter,
      sub: language === "fr" ? "Dégustation au Caveau familial" : "Cellar door tasting in Chavignol"
    }
  ];

  return (
    <>
      <header className={`nav-header ${scrolled ? "scrolled" : ""} ${!visible && !mobileOpen ? "nav-hidden" : ""}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-brand" onClick={closeMobile} aria-label="Retour en haut de page">
            <img
              src={asset("/brand/logo-emblem-gold.svg")}
              alt="Emblème Domaine André Neveu"
              className="nav-emblem"
              width="44"
              height="35"
            />
            <div className="nav-titles">
              <span className="nav-name">{t.nav.brand}</span>
              <span className="nav-sub">SANCERRE · {t.nav.location}</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-menu" aria-label="Navigation principale">
            <a href="#domaine">{t.nav.domaine}</a>
            <a href="#terroirs">{t.nav.terroirs}</a>
            <a href="#vins">{t.nav.vins}</a>
            <a href="#chai">{t.nav.chai}</a>
            <a href="#visiter">{t.nav.visiter}</a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="lang-btn"
              onClick={toggleLanguage}
              aria-label={language === "fr" ? "Switch language to English" : "Passer le site en Français"}
            >
              <span className={language === "fr" ? "active" : ""}>FR</span>
              <span className="sep">/</span>
              <span className={language === "en" ? "active" : ""}>EN</span>
            </button>

            <a href="tel:0248540448" className="btn-call-direct" aria-label={`Appeler le domaine au ${t.nav.callUs}`}>
              <IconPhone size={14} />
              <span className="call-number">{t.nav.callUs}</span>
            </a>

            <button
              type="button"
              className={`hamburger ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-curtain"
              aria-label={mobileOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Mobile Navigation Curtain */}
      <div
        id="mobile-curtain"
        className={`mobile-curtain ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="curtain-bg-glow" aria-hidden="true"></div>
        <img
          src={asset("/brand/logo-emblem-gold.svg")}
          alt=""
          className="curtain-watermark"
          aria-hidden="true"
        />

        <div className="curtain-inner">
          {/* Top Bar inside Curtain */}
          <div className="curtain-topbar">
            <div className="curtain-brand">
              <img
                src={asset("/brand/logo-emblem-gold.svg")}
                alt="Emblème"
                className="curtain-logo"
                width="36"
                height="28"
              />
              <div className="curtain-brand-text">
                <span className="c-brand-title">DOMAINE ANDRÉ NEVEU</span>
                <span className="c-brand-loc">CHAVIGNOL · SANCERRE</span>
              </div>
            </div>

            <button
              type="button"
              className="curtain-close-btn"
              onClick={closeMobile}
              aria-label="Fermer le menu"
            >
              <span className="close-text">{language === "fr" ? "FERMER" : "CLOSE"}</span>
              <span className="close-icon">✕</span>
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <nav className="curtain-nav" aria-label="Menu mobile">
            <ul className="curtain-links-list">
              {navItems.map((item, idx) => (
                <li
                  key={item.href}
                  className="curtain-nav-item"
                  style={{ "--item-index": idx }}
                >
                  <a href={item.href} onClick={closeMobile} className="curtain-link">
                    <span className="link-num">{item.num}</span>
                    <div className="link-titles">
                      <span className="link-main">{item.title}</span>
                      <span className="link-desc">{item.sub}</span>
                    </div>
                    <IconArrowRight size={16} className="link-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Card / Caveau Footprint */}
          <div className="curtain-footer">
            <div className="curtain-caveau-info">
              <span className="c-caveau-badge">
                <IconMapPin size={13} style={{ marginRight: 6, verticalAlign: "middle" }} />
                CAVEAU DE CHAVIGNOL
              </span>
              <p className="c-caveau-hours">
                {language === "fr"
                  ? "Ouvert du Lundi au Samedi (sur rendez-vous le week-end)"
                  : "Open Monday to Saturday (weekend by appointment)"}
              </p>
            </div>

            <div className="curtain-actions-row">
              <a href="tel:0248540448" className="curtain-btn primary">
                <IconPhone size={14} />
                <span>{t.nav.callUs}</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=47.3379938490761,2.8032034635543823"
                target="_blank"
                rel="noopener noreferrer"
                className="curtain-btn outline"
              >
                <IconMapPin size={14} />
                <span>{language === "fr" ? "Itinéraire" : "Map"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
