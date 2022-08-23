import { createContext, useState } from 'react';

export const LanguageContext = createContext({
  language: '',
  setLanguage: () => null,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const value = { language, setLanguage };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
