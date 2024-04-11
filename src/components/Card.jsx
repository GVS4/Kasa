import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ rentals }) => {
  return (
<>
      {rentals.map((e) => ( // Mapping through rentals array to display cards
        <div key={`card-${e.id}`} className="card"> {/* Adding unique key based on rental id */}
          <NavLink to={`/rental/${e.id}`}> {/* Creating NavLink for navigation to rental page */}
            <img src={e.cover} alt={`photo ${e.title}`} /> {/* Displaying rental cover photo */}
            <h2>{e.title}</h2> {/* Displaying rental name */}
          </NavLink>
        </div>
      ))}
    </>
  );
};

Card.propTypes = {
  rentals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
