import { useTranslation } from "react-i18next";

export const Settings: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full rounded-xl bg-slate-50 p-6">
      <h1 className="text-lg font-bold">{t("settings.title")}</h1>
      <div className="w-full flex justify-between">
        <label
          htmlFor="language"
          className="text-base font-semibold text-slate-500 flex flex-col justify-end"
        >
          {t("settings.languageSection.title")}
        </label>
        <select
          name="language"
          id="language"
          className="p-2 rounded-md"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">{t("settings.languageSection.english")}</option>
          <option value="pt">{t("settings.languageSection.portuguese")}</option>
        </select>
      </div>
    </div>
  );
};
