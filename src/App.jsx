import "./App.css";
import CaseStudies from "./Sections/CaseStudies/CaseStudies";
import ChooseUs from "./Sections/ChooseUs/ChooseUs";
import Hero from "./Sections/Hero/Hero";
import OurStory from "./Sections/OurStory/OurStory";
import Services from "./Sections/Services/Services";

const App = () => {
  return (
    <>
      <Hero />
      <Services/>
      <OurStory/>
      <ChooseUs/>
      <CaseStudies/>
    </>
  );
};

export default App;
