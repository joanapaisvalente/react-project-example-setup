import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Error: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center mt-[30%] md:mt-2">
      <FontAwesomeIcon
        icon={faFaceFrown}
        size="3x"
        style={{ color: "rgb(148 163 184)" }}
      />
      <h1 className="text-2xl font-bold text-slate-800 mt-3 flex justify-center">
        {t("error.error.title")}
      </h1>
      <p className="text-base text-slate-600 flex justify-center">
        {t("error.error.information")}
      </p>
    </div>
  );
};

export default Error;
