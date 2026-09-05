import { useLanguage } from "../i18n";
import { IconPhone, IconMapPin, IconWine } from "./Icons";
import "./QuickMobileBar.css";

export default function QuickMobileBar() {
  const { language, t } = useLanguage();

  return (
    <aside className="quick-mobile-bar" aria-label="Actions rapides">
      <a href="tel:0248540448" className="quick-bar-btn primary">
        <IconPhone size={14} />
        <span>{t.nav.callUs}</span>
      </a>
      <a
        href="https://www.google.com/maps/search/?api=1&query=47.3379938490761,2.8032034635543823"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-bar-btn"
      >
        <IconMapPin size={14} />
        <span>{language === "fr" ? "Itinéraire" : "Directions"}</span>
      </a>
      <a href="#vins" className="quick-bar-btn">
        <IconWine size={14} />
        <span>{t.nav.vins}</span>
      </a>
    </aside>
  );
}
