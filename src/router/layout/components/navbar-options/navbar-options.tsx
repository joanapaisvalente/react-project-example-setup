import { Link } from "react-router-dom";
import { RoutePaths } from "../../../enum/route-paths";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setNavbarOptionsVisibility: Dispatch<SetStateAction<boolean>>;
}

const navbarOptions = [
  { redirectTo: RoutePaths.HOME, linkName: "Home" },
  { redirectTo: RoutePaths.CONTACTS, linkName: "Contacts" },
  { redirectTo: RoutePaths.SETTINGS, linkName: "Settings" },
];

const NavbarOptions: React.FC<Props> = ({ setNavbarOptionsVisibility }) => {
  const hideNavBarOptions = () => {
    setNavbarOptionsVisibility(false);
  };

  return (
    <div
      className={`sm:hidden flex absolute w-full bg-slate-100 top-[72px] justify-center`}
    >
      <ul className="flex flex-col gap-y-4 my-5 items-center">
        {navbarOptions.map((option, index) => (
          <li onClick={() => hideNavBarOptions()} key={index}>
            <Link to={option.redirectTo}>
              <p className="text-slate-800 text-lg font-semibold hover:underline">
                {option.linkName}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarOptions;
