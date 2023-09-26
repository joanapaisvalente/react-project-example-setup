import { useState } from "react";
import useStore from "../../../../store/store";
import { useTranslation } from "react-i18next";

const NewsLetterSection: React.FC = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { setName, setEmail } = useStore();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setName(userName);
        setEmail(userEmail);
      }}
    >
      <h1 className="text-lg font-semibold text-slate-800 my-4 whitespace-normal">
        {t("contacts.newsletterSection.title")}
      </h1>
      <div className="flex flex-col my-4">
        <label htmlFor="name" className="mb-2">
          {t("contacts.newsletterSection.name")}
        </label>
        <input
          id="name"
          type="text"
          value={userName}
          placeholder={t("contacts.newsletterSection.nameInput")}
          className="p-1 rounded"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col my-4">
        <label htmlFor="email" className="mb-2">
          {t("contacts.newsletterSection.email")}
        </label>
        <input
          id="email"
          type="email"
          value={userEmail}
          placeholder={t("contacts.newsletterSection.emailInput")}
          className="p-1 rounded"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          disabled={!userName || !userEmail}
          className="bg-slate-700 text-slate-100 py-2 px-5 rounded-md font-semibold enabled:hover:px-6 ease-in-out duration-100 disabled:bg-slate-300"
        >
          {t("contacts.newsletterSection.submit")}
        </button>
      </div>
    </form>
  );
};

export default NewsLetterSection;
