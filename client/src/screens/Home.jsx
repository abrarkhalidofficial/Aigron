import { HomeSection } from "../components/HomeSection";
import { IdeaSection } from "../components/IdeaSection";
import { ServicesSection } from "../components/ServicesSection";
import { ExpertiseSection } from "../components/ExpertiseSection";
import { OfficeSection } from "../components/OfficeSection";
import { ContactSection } from "../components/ContactSection";
import { useState } from "react";

export default function Home() {
  const [defaultSubject, setDefaultSubject] = useState("Hire Professionals");
  return (
    <>
      <HomeSection />
      <IdeaSection />
      <ServicesSection setDefaultSubject={setDefaultSubject} />
      <ExpertiseSection />
      <OfficeSection />
      <ContactSection defaultSubject={defaultSubject} />
    </>
  );
}
