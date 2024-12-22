import { ChiSono } from "./components/ChiSono";
import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
/* import { Testimonials } from "./components/Testimonials"; */
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <div className="text-white bg-black">
      <Navbar />
      <Header />
      <ChiSono />
      <Services />
      <Projects />
      <FAQ />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
