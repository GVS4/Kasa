import logo from "../assets/images/logo.svg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo Kasa" className="header-logo" />
      <Navigation />
    </header>
  );
};

export default Header;
