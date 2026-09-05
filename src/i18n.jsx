import { createContext, useContext, useState } from "react";
import { copy } from "./data/copy";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  function toggleLanguage() {
    setLanguage(prev => (prev === "fr" ? "en" : "fr"));
  }

  const t = copy[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
