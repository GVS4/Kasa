import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import rentals from "../data/rentals.json";
import TogglePanel from "../components/TogglePanel";
import Carousel from "../components/Rental/Carousel";
import Tags from "../components/Rental/Tag";
import Rating from "../components/Rental/Rating";

const Rental = () => {

  const { id } = useParams();// Extracting 'id' from URL params
  const rental = rentals.find((e) => e.id === id);// Finding rental object with matching id
  const navigate = useNavigate();

  useEffect(() => { // Effect hook to handle redirection if rental is not found
    if (!rental) {
      navigate("/error");
    }
  }, [id, rental, navigate]); // Dependency array for useEffect hook

  if (!rental) { 
    return null;
  }

  return (
    <div className="rental-container">
      <Carousel slides={rental.pictures} />
      <div className="location-container">
        <div className="location-content-top">
          <div className="location-content-left">
            <h2>{rental.title}</h2>
            <h3>{rental.location}</h3>
            <div className="tag-container">
              {rental.tags.map((tag, index) => (
                <Tags key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className="hostRating-container">
            <div className="host-container">
              <h3>{rental.host.name}</h3>
              <img src={rental.host.picture} alt={rental.title} />
            </div>
            <div className="rating-container">
              <Rating rating={parseInt(rental.rating, 10)} />
            </div>
          </div>
        </div>
        <div className="location-content-bottom">
          <TogglePanel title="Description">{rental.description}</TogglePanel>
          <TogglePanel title="Equipment">
            <ul>
              {rental.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          </TogglePanel>
        </div>
      </div>
    </div>
  );
};

export default Rental;
