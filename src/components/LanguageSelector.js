import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/index";

const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export default function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
}) {
  const { i18n, t } = useTranslation();
  const LANGUAGE_SELECTOR_ID = "language-selector";
  const [language, setLanguage] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const handleLanguageChange = async (language) => {
    setLanguage(language);
    setSelectedLanguage(language);
    await i18n.changeLanguage(language.key);
    setIsOpen(false);
    console.log(language);
  };

  React.useEffect(() => {
    setLanguage(LANGUAGES[0]);
  }, []);
  React.useEffect(() => {
    const handleWindowClick = (event) => {
      const target = event.target.closest("button");
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="relative bg-[#333333] text-white text-sm rounded-lg  block w-full px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        id={LANGUAGE_SELECTOR_ID}
        aria-expanded={isOpen}
      >
        <div className="flex">
          {language.image}
          <svg
            className="-mr-0 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sm:flex hidden pr-2">{language.label}</span>
        </div>
      </button>
      {isOpen && (
        <div
          className="w-full origin-top-right absolute right-0  bg-[#333333] rounded-md shadow-lg  text-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
        >
          {LANGUAGES.filter((item) => item !== selectedLanguage).map(
            (lan, index) => (
              <div role="none">
                <button
                  key={lan.key}
                  onClick={() => handleLanguageChange(lan)}
                  className={`${
                    selectedLanguage.key === lan.key
                      ? "bg-gray-500 text-gray-900"
                      : "text-gray-700"
                  }  px-1 py-1 text-sm text-left items-center inline-flex hover:bg-gray-500 hover:text-black`}
                  role="menuitem"
                >
                  <div className="flex text-white">
                    {lan?.image}
                    <svg
                      className="-mr-0 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="truncate pr-2 text-white sm:flex hidden">
                      {lan?.label}
                    </span>
                  </div>
                </button>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
