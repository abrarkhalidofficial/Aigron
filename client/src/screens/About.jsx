import missionsection from "../assets/mission-section.png";
import { ContactSection } from "../components/ContactSection";

export default function About() {
  return (
    <>
      <section className="mission__section mission__section__special">
        <div className="mission__section__right">
          <div className="mission__section__right__heading">About Us</div>
          <div className="mission__section__right__info">
            Aigron is an AI and Data consultancy, development and recruitment
            company founded by experts who are actively involved in the AI and
            Data domain. We are experienced with helping companies' businesses
            to the next level through digitalisation.
          </div>
          <a
            className="home__section__buttons__btn home__section__buttons__btn__primary"
            title="Let us support you"
            href="#contact"
            style={{
              width: "fit-content",
              marginLeft: 0,
              display: "flex",
              boxShadow: "0px 10px 30px rgba(0,0,0,.1)",
              marginTop: "2em",
            }}
          >
            <span>Let us support you</span>
          </a>
        </div>
        <div className="mission__section__left">
          <div className="mission__section__left__img">
            <img src={missionsection} alt="mission" />
          </div>
        </div>
      </section>
      <section className=" mission__section">
        <div className="mission__section__left">
          <div className="mission__section__left__img">
            <img src={missionsection} alt="mission" />
          </div>
        </div>
        <div className="mission__section__right">
          <div className="mission__section__right__heading">
            Mission & Vision
          </div>
          <div className="mission__section__right__info">
            Through Aigron we aim to be a dedicated partner for our customers to
            help them accelerate adoption of new technologies during the
            technical evolution, making it possible taking the next step in
            their businesses. We strongly believe AI and Data developments can
            contribute to a better and more sustainable world.
          </div>
        </div>
      </section>
      <ContactSection on="about" />
    </>
  );
}
