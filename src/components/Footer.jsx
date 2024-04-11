import logoFooter from "../assets/images/logoFooter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo Kaza" className="footer-logo" />
      <h3 className="footer-text">© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
};

export default Footer;
