import Homesection from "../assets/home.png";

export function home() {
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__container__img">
          <img src={Homesection} alt="Homesection" />
        </div>
        <div className="home__container__content">
          <div
            className="home__container__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Full-Service Software Development Company
          </div>
          <div
            className="home__container__info"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1500"
          >
            Build world-class digital products with a team of design,
            development and strategy experts. All in one place
          </div>
          <div
            className="home__container__btn"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1700"
          >
            <button>Let us support you</button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
