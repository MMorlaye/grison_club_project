import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'fr'
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'en'
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  );
};
