import careerimg from "../assets/career.png";
import carrescontentright from "../assets/career-content-right.png";

export default function Career() {
  return (
    <>
      <section className="Career__page">
        <div className="career__page__img">
          <img src={careerimg} alt="career" />
        </div>
        <div className="career__page__heading">Career</div>
      </section>
      <section className="Career__page__content__section">
        <div className="Career__page__content__left">
          <div className="Career__page__content__left__heading">
            Want to become part of the Aigron family?
          </div>
          <div className="Career__page__content__left__info">
            Get in touch for our latest job openings.
          </div>
          <div className="Career__page__content__left__button">
            <button>Contact Us</button>
          </div>
        </div>
        <div className="Career__page__content__right">
          <div className="Career__page__content__right__img">
            <img src={carrescontentright} alt="carrescontentright" />
          </div>
        </div>
      </section>
    </>
  );
}
