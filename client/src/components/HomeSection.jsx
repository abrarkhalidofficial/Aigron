import Homesection from "../assets/home.png";

export function HomeSection() {
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__container__img">
          <img src={Homesection} alt="Homesection" />
        </div>
        <div className="home__container__content">
          <div className="home__container__heading">
            Trusted partner for your AI and Data projects
          </div>
          <div className="home__container__info">
            Get your AI and Data solutions professionally developed by our
            senior professionals.
          </div>
          <div className="home__container__info">
            Aigron experts can support your digitalization challenges or simply
            hire professionals to work dedicated for you.
          </div>
          <div>
            <button className="home__section__buttons__btn home__section__buttons__btn__primary">
              Let us support you
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
