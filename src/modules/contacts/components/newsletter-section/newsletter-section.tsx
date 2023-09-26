import { useState } from "react";
import useStore from "../../../../store/store";
import { useTranslation } from "react-i18next";

const NewsLetterSection: React.FC = () => {
  const { t } = useTranslation();
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const { setName, setEmail } = useStore();

  return (
    <div className="flex justify-center my-10">
      <div className="w-full sm:w-3/4 lg:w-2/4 bg-slate-50 p-6 rounded-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setName(UserName);
            setEmail(UserEmail);
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
              value={UserName}
              placeholder={t("contacts.newsletterSection.nameInput")}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="email" className="mb-2">
              {t("contacts.newsletterSection.email")}
            </label>
            <input
              id="email"
              type="text"
              value={UserEmail}
              placeholder={t("contacts.newsletterSection.emailInput")}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-slate-700 text-slate-100 py-2 px-5 rounded-md font-semibold hover:px-6 ease-in-out duration-100">
              {t("contacts.newsletterSection.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSection;
