import { ChiSono } from "./components/ChiSono";
import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
/* import { Testimonials } from "./components/Testimonials"; */
import Pricing from "./components/Pricing";
import { Projects } from "./components/Projects";
import ProjectOverview from "./components/ProjectOverview";
import TechStackSection from "./components/TechStackSection";

const App = () => {
  return (
    <div className="text-white relative bg-black">
      <Navbar />
      <Header />
      <ChiSono />
      <Services />
      <TechStackSection />
      <Projects />
      <Pricing />
      <FAQ />
      <ProjectOverview />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
