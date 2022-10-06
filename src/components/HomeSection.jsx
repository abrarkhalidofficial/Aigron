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
            Full-Service Software Development Company
          </div>
          <div className="home__container__info">
            Build world-class digital products with a team of design,
            development and strategy experts. All in one place
          </div>
          <div className="home__container__btn">
            <button>Let us support you</button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
