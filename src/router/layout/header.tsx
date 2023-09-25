import { Link } from "react-router-dom";
import { RoutePaths } from "../enum/route-paths";

const Header = () => {
  return (
    <div className="w-full h-[70px] bg-slate-400 flex justify-center items-center gap-5 mb-2">
      <Link to={RoutePaths.HOME}>
        <h3 className="text-slate-800 text-lg font-semibold hover:underline">
          Home
        </h3>
      </Link>
      <Link to={RoutePaths.CONTACTS}>
        <h3 className="text-slate-800 text-lg font-semibold hover:underline">
          Contacts
        </h3>
      </Link>
    </div>
  );
};

export default Header;
