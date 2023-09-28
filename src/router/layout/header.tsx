import { useState } from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../enum/route-paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import NavbarOptions from "./components/navbar-options/navbar-options";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useTranslation } from "react-i18next";

const navbarOptions = [
  { redirectTo: RoutePaths.HOME, translation: "header.menu.home" },
  { redirectTo: RoutePaths.CONTACTS, translation: "header.menu.contacts" },
  { redirectTo: RoutePaths.SETTINGS, translation: "header.menu.settings" },
  { redirectTo: RoutePaths.USERS, translation: "header.menu.users" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-[70px] bg-slate-200 flex justify-between items-center gap-5 mb-6">
        <h1 className="text-2xl font-bold ml-6">LOGO</h1>
        <div className="flex items-center mr-6">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon
              icon={!isMenuOpen ? faBars : faXmark}
              size="lg"
              className="sm:hidden block"
            />
          </button>
          <ul className="sm:flex sm:fex-row gap-x-4 hidden">
            {navbarOptions.map((option) => (
              <li>
                <Link to={option.redirectTo}>
                  <h3 className="text-slate-800 text-lg font-semibold hover:underline">
                    {t(option.translation)}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <NavbarOptions
          setNavbarOptionsVisibility={setIsMenuOpen}
          navBarOptions={navbarOptions}
        />
      )}
    </>
  );
};

export default Header;
