import PropTypes from "prop-types";
import bannerHome from "../assets/images/bannerHome.png";
import bannerAbout from "../assets/images/bannerAbout.png";

const Banner = ({ page }) => {
  return (
    <div className="banner-container">
      <img
        src={page === "about" ? bannerAbout : bannerHome} // Conditional rendering of banner image based on page prop
        alt="Paysage"
        className="banner-img"
      />
      <div className="mask"></div> {/* Adding mask overlay */}
      {page === "home" && <h1 className="banner-title">Chez vous, partout et ailleurs</h1>}
    </div>
  );
};

Banner.propTypes = {
  page: PropTypes.oneOf(["about", "home"]).isRequired,
};

export default Banner;
