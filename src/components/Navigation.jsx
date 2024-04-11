import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "nav-underline" : "")} // Adding conditional class based on NavLink active state
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-underline" : "")} // Adding conditional class based on NavLink active state
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
