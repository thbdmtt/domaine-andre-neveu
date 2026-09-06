import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n';
import { asset } from '../utils/asset';
import { IconMapPin, IconPhone } from './Icons';
import './Nav.css';

export default function Nav() {
  const { language, toggleLanguage, t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY.current;
      setScrolled(y > 24);
      if (mobileOpen || y <= 80) setVisible(true);
      else if (Math.abs(delta) >= 8) setVisible(delta < 0);
      lastY.current = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    const onKey = (event) => event.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [mobileOpen]);

  const links = [['#domaine', t.nav.domaine], ['#terroirs', t.nav.terroirs], ['#vins', t.nav.vins], ['#chai', t.nav.chai], ['#visiter', t.nav.visiter]];
  const close = () => setMobileOpen(false);

  return <>
    <header className={`nav-header ${scrolled ? 'scrolled' : ''} ${visible ? '' : 'nav-hidden'}`}>
      <div className="nav-container">
        <a className="nav-brand" href="#hero" onClick={close} aria-label={t.nav.brand}>
          <img src={asset('/brand/logo-emblem-on-light.svg')} alt="" width="39" height="31" />
          <span><strong>{t.nav.brand}</strong><small>Chavignol · Sancerre</small></span>
        </a>
        <nav className="desktop-menu" aria-label={language === 'fr' ? 'Navigation principale' : 'Main navigation'}>
          {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="lang-btn" type="button" onClick={toggleLanguage} aria-label={language === 'fr' ? 'English version' : 'Version française'}>{language === 'fr' ? 'EN' : 'FR'}</button>
          <a className="nav-phone" href="tel:0248540448" aria-label={t.nav.callUs}><IconPhone size={15} /><span>{t.nav.callUs}</span></a>
          <button className="menu-toggle" type="button" onClick={() => setMobileOpen(true)} aria-expanded={mobileOpen} aria-controls="mobile-menu"><span>Menu</span><i aria-hidden="true" /></button>
        </div>
      </div>
    </header>
    <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu" aria-hidden={!mobileOpen} onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="mobile-menu-panel">
        <div className="mobile-menu-head">
          <img src={asset('/brand/logo-emblem-on-light.svg')} alt="" width="44" height="35" />
          <button type="button" onClick={close}>{language === 'fr' ? 'Fermer' : 'Close'} <span aria-hidden="true">×</span></button>
        </div>
        <nav aria-label={language === 'fr' ? 'Menu mobile' : 'Mobile menu'}>{links.map(([href, label], index) => <a href={href} onClick={close} key={href}><small>0{index + 1}</small><span>{label}</span></a>)}</nav>
        <div className="mobile-menu-actions">
          <a href="tel:0248540448"><IconPhone size={17} />{t.nav.callUs}</a>
          <a href="https://www.google.com/maps/search/?api=1&query=47.3379938490761,2.8032034635543823" target="_blank" rel="noreferrer"><IconMapPin size={17} />Chavignol</a>
        </div>
      </div>
    </div>
  </>;
}
