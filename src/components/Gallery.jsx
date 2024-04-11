import Card from "./Card";
import rentals from "../data/rentals.json";

const Gallery = () => {
  return (
    <div className="gallery">
      <Card rentals={rentals} />
    </div>
  );
};

export default Gallery;
