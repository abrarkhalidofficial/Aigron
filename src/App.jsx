import AOS from "aos";
import Header from "./components/Header";
import { HomeSection } from "./components/HomeSection";
import { IdeaSection } from "./components/IdeaSection";
import { ServicesSection } from "./components/ServicesSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { OfficeSection } from "./components/OfficeSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

import "./App.scss";
import "aos/dist/aos.css";
import "react-phone-number-input/style.css";

function App() {
  AOS.init();
  return (
    <>
      <Header />
      <HomeSection />
      <IdeaSection />
      <ServicesSection />
      <ExpertiseSection />
      <OfficeSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
