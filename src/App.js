import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Hosting from "./components/Hosting";
import RealStory from "./components/RealStory";
import SeverOverWebsites from "./components/SeverOverWebsites";
import Websites from "./components/Websites";
import YourWebsites from "./components/YourWebsites";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

function App() {
  const [Loader, setLorder] = useState(false);
  useEffect(() => {
    setLorder(true);
    setTimeout(() => {
      setLorder(false);
    }, 3500);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        {" "}
        {Loader ? (
          <div>
            {" "}
            <Preloader />{" "}
          </div>
        ) : (
          <div>
            {" "}
            <HeroSection /> <Hosting /> <Websites /> <RealStory />
            <SeverOverWebsites />
            <YourWebsites />
            <Footer />
            <BackToTop />{" "}
          </div>
        )}{" "}
      </div>{" "}
    </>
  );
}

export default App;
