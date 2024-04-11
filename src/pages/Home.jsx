import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="home">
      <Banner page="home" />
      <Gallery />
    </div>
  );
};

export default Home;
