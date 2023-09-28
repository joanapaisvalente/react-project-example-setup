import { Link } from "react-router-dom";
import { RoutePaths } from "../../../enum/route-paths";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  setNavbarOptionsVisibility: Dispatch<SetStateAction<boolean>>;
  navBarOptions: { redirectTo: RoutePaths; translation: string }[];
}

const NavbarOptions: React.FC<Props> = ({
  setNavbarOptionsVisibility,
  navBarOptions,
}) => {
  const { t } = useTranslation();

  const hideNavBarOptions = () => {
    setNavbarOptionsVisibility(false);
  };

  return (
    <div
      className={`sm:hidden flex absolute w-full bg-slate-100 top-[72px] justify-center`}
    >
      <ul className="flex flex-col gap-y-4 my-5 items-center">
        {navBarOptions.map((option, index) => (
          <li onClick={() => hideNavBarOptions()} key={index}>
            <Link to={option.redirectTo}>
              <p className="text-slate-800 text-lg font-semibold hover:underline">
                {t(option.translation)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarOptions;
