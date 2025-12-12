import "./App.css";
import CaseStudies from "./Sections/CaseStudies/CaseStudies";
import ChooseUs from "./Sections/ChooseUs/ChooseUs";
import Footer from "./Sections/Footer/Footer";
import Hero from "./Sections/Hero/Hero";
import OurStory from "./Sections/OurStory/OurStory";
import Services from "./Sections/Services/Services";
import Testimonial from "./Sections/Testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Hero />
      <Services/>
      <OurStory/>
      <ChooseUs/>
      <CaseStudies/>
      <Testimonial/>
      <Footer/>
    </>
  );
};

export default App;
