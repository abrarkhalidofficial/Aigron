import footerleft from "../assets/footer-left.png";
import footerbackground from "../assets/footer-background.png";

export function footer() {
  return (
    <section className="footer">
      <div className="footer__background">
        <img src={footerbackground} alt="footerbackground" />
      </div>
      <div className="footer__content">
        <div
          className="footer__left"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1400"
        >
          <div className="footer__left__img">
            <img src={footerleft} alt="footerleft" />
          </div>
        </div>
        <div
          className="footer__right"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1400"
        >
          <div
            className="footer__right__heading__and__tags"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1600"
          >
            <div className="footer__right__heading">Contact</div>
            <div className="footer__right__span"></div>
            <div className="footer__right__all__tags">
              <div className="footer__right__content__tag">
                <a href="#">address here</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">contact@Aigron.com</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">0554 6768865</a>
              </div>
            </div>
          </div>
          <div
            className="footer__right__heading__and__tags"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1600"
          >
            <div className="footer__right__heading">Social</div>
            <div className="footer__right__span"></div>
            <div className="footer__right__all__tags">
              <div className="footer__right__content__tag">
                <a href="#">Facebook</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">Twitter</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
          <div
            className="footer__right__heading__and__tags"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1600"
          >
            <div className="footer__right__heading">Pages</div>
            <div className="footer__right__span"></div>
            <div className="footer__right__all__tags">
              <div className="footer__right__content__tag">
                <a href="#">About Us</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">Projects</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">Services</a>
              </div>
            </div>
          </div>
          <div
            className="footer__right__heading__and__tags"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1600"
          >
            <div className="footer__right__heading">
              Subscribe to Newsletter
            </div>
            <div className="footer__right__span"></div>
            <div className="footer__right__input__button">
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Enter Email"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
