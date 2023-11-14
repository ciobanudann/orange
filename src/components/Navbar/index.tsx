import { Link } from "react-router-dom";
import { Routes } from "../../utils/routes";

const Navbar = () => {
  return (
    <div className="flex justify-end gap-4 items-center p-4 font-bold">
      <Link className="pointer hover:text-slate-500" to={Routes.Home}>
        Home
      </Link>
      <Link className="pointer hover:text-slate-500" to={Routes.Favorites}>
        Favorites
      </Link>
    </div>
  );
};

export default Navbar;
