import Ideasection from "../assets/idea.png";
import Idealogo from "../assets/idea-logo.png";

export function IdeaSection() {
  return (
    <section className="idea">
      <div className="idea__img">
        <img src={Ideasection} alt="Ideasection" />
      </div>
      <div className="idea__content">
        <div className="idea__content__logo">
          <img src={Idealogo} alt="Idealogo" />
        </div>
        <div className="idea__content__heading">
          You share your idea. We get it done.
        </div>
        <div className="idea__content__info">
          We transform bold business ideas into exceptional digital products.
          Searching for a partner that will take the process of software
          development off your hands? You’ve come to the right place. We ideate,
          design, and develop data-driven digital products made to answer
          business challenges. We offer 360° services to smoothly guide you on
          your way to creating a seamless digital masterpiece.
        </div>
      </div>
    </section>
  );
}