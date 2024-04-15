import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-end">
        <li>
          <NavLink className="btn btn-ghost text-xl" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="btn btn-ghost text-xl" to="/create-auction">
            Create Auction
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
