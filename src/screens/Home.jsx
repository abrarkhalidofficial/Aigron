import { HomeSection } from "../components/HomeSection";
import { IdeaSection } from "../components/IdeaSection";
import { ServicesSection } from "../components/ServicesSection";
import { ExpertiseSection } from "../components/ExpertiseSection";
import { OfficeSection } from "../components/OfficeSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <IdeaSection />
      <ServicesSection />
      <ExpertiseSection />
      <OfficeSection />
      <ContactSection />
    </>
  );
}
