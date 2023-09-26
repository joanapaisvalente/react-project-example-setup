import { Link } from "react-router-dom";
import { RoutePaths } from "../enum/route-paths";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[70px] bg-slate-400 flex justify-center items-center gap-5 mb-2">
      <Link to={RoutePaths.HOME}>
        <h3 className="text-slate-800 text-lg font-semibold hover:underline">
          {t("header.menu.home")}
        </h3>
      </Link>
      <Link to={RoutePaths.CONTACTS}>
        <h3 className="text-slate-800 text-lg font-semibold hover:underline">
          {t("header.menu.contacts")}
        </h3>
      </Link>
      <Link to={RoutePaths.SETTINGS}>
        <h3 className="text-slate-800 text-lg font-semibold hover:underline">
          {t("header.menu.settings")}
        </h3>
      </Link>
    </div>
  );
};

export default Header;
