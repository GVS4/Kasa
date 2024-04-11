import PropTypes from "prop-types";
import starColored from "../../assets/images/starColored.svg";
import starNeutral from "../../assets/images/starNeutral.svg";

const Rating = ({ rating }) => {
  const totalStars = 5;

  let arrayStarsColored = [];
  let arrayStarsNeutral = [];

  // Loop to generate colored stars based on rating
  for (let i = 0; i < rating; i++) {
    arrayStarsColored.push(<img className="starColored" key={i} src={starColored} alt="star colored" />);
  }

  // Loop to generate neutral stars based on remaining stars
  for (let i = 0; i < (totalStars - rating); i++) {
    arrayStarsNeutral.push(<img className="starNeutral" key={i} src={starNeutral} alt="star neutral" />);
  }

  return (
    <>
      {arrayStarsColored}
      {arrayStarsNeutral}
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
