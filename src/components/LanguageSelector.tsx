import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

type languageOption = { language: string; code: string };

const languageOptions: languageOption[] = [
  {
    language: "English",
    code: "en",
  },
  {
    language: "Italian",
    code: "it",
  },
];

const LanguageSelector = () => {
  const [language, setLanguage] = useState(i18next.language);

  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    document.body.dir = i18n.dir(); //sets the body to ltr or rtl
  }, [i18n, i18n.language]);

  return (
    <select
      id="language"
      value={language}
      onChange={handleLanguageChange}
      className="bg-black"
    >
      {languageOptions.map(({ language, code }) => (
        <option value={code} key={code}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
