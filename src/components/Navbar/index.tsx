import { Link } from "react-router-dom";
import { Routes } from "../../utils/routes";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end gap-4 p-4 font-bold">
      <Link
        data-cy="navbar-home"
        className="pointer hover:text-slate-500"
        to={Routes.Home}
      >
        Home
      </Link>
      <Link
        data-cy="navbar-favorites"
        className="pointer hover:text-slate-500"
        to={Routes.Favorites}
      >
        Favorites
      </Link>
    </div>
  );
};

export default Navbar;
