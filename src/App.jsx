import { LanguageProvider, useLanguage } from "./i18n";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Domaine from "./components/Domaine";
import Terroirs from "./components/Terroirs";
import Wines from "./components/Wines";
import Cellar from "./components/Cellar";
import Visiting from "./components/Visiting";
import Export from "./components/Export";
import Footer from "./components/Footer";
import QuickMobileBar from "./components/QuickMobileBar";

import "./styles/variables.css";
import "./styles/base.css";

function AppContent() {
  const { language } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {language === "fr" ? "Aller au contenu principal" : "Skip to main content"}
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Domaine />
        <Terroirs />
        <Wines />
        <Cellar />
        <Visiting />
        <Export />
      </main>
      <Footer />
      <QuickMobileBar />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
