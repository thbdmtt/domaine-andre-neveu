import { useLanguage } from "../i18n";
import { IconClock, IconMapPin, IconPhone, IconMail, IconInfo } from "./Icons";
import "./Visiting.css";

export default function Visiting() {
  const { t } = useLanguage();

  return (
    <section className="section-pad visiting-section" id="visiter" aria-label="Visite et contact au caveau">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t.visiter.eyebrow}</span>
          <h2 className="section-title">{t.visiter.title}</h2>
          <p className="section-desc">{t.visiter.desc}</p>
        </div>

        <div className="visiting-grid">
          {/* Card 1: Horaires & Rendez-vous */}
          <article className="visit-card">
            <div className="visit-card-header">
              <span className="card-vector-icon-wrap" aria-hidden="true">
                <IconClock size={20} />
              </span>
              <h3 className="card-title">{t.visiter.hoursTitle}</h3>
            </div>
            <div className="hours-block">
              <p className="hours-item primary">
                <time>{t.visiter.hoursWeek}</time>
              </p>
              <p className="hours-item">
                <time>{t.visiter.hoursSat}</time>
              </p>
              <p className="hours-item closed">
                <span>{t.visiter.hoursSun}</span>
              </p>
            </div>
            <div className="visit-note">
              <IconInfo size={15} style={{ marginRight: 6, verticalAlign: "middle", color: "var(--or-sceau-clair)" }} />
              <span>{t.visiter.appointmentNote}</span>
            </div>
          </article>

          {/* Card 2: Adresse & GPS */}
          <article className="visit-card">
            <div className="visit-card-header">
              <span className="card-vector-icon-wrap" aria-hidden="true">
                <IconMapPin size={20} />
              </span>
              <h3 className="card-title">{t.visiter.addressTitle}</h3>
            </div>
            <address className="address-block">
              <p className="address-line main">{t.visiter.address}</p>
              <p className="address-line gps">{t.visiter.gps}</p>
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=47.3379938490761,2.8032034635543823"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold visit-btn"
            >
              <IconMapPin size={15} />
              <span>{t.visiter.mapBtn}</span>
            </a>
          </article>

          {/* Card 3: Contact direct & Réservation */}
          <article className="visit-card highlight">
            <div className="visit-card-header">
              <span className="card-vector-icon-wrap" aria-hidden="true">
                <IconPhone size={20} />
              </span>
              <h3 className="card-title">Contact Caveau</h3>
            </div>
            <p className="visit-contact-p">
              Pour préparer votre passage ou réserver une dégustation, joignez directement le domaine :
            </p>
            <div className="contact-buttons-col">
              <a href="tel:0248540448" className="btn btn-primary visit-btn">
                <IconPhone size={15} />
                <span>{t.visiter.callBtn} : 02 48 54 04 48</span>
              </a>
              <a href="mailto:chavignol@orange.fr" className="btn btn-ghost visit-btn">
                <IconMail size={15} />
                <span>{t.visiter.emailBtn}</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
