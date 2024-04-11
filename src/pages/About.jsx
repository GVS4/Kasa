import Banner from "../components/Banner";
import TogglePanel from "../components/TogglePanel";
import values from "../data/about_values.json";

const About = () => {
  return (
    <div className="about">
      <Banner page="about" />
      {values.map((e, index) => (
        <TogglePanel key={index} index={index} title={e.title}>
          {e.text}
        </TogglePanel>
      ))}
    </div>
  );
};

export default About;
