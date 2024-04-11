import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <ul>
          <li>
            <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Error;
