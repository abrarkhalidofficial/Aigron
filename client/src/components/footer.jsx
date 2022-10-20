import footerleft from "../assets/footer-left.png";
import footerbackground from "../assets/footer-background.gif";

export function Footer() {
  return (
    <section className="footer">
      <div className="footer__background">
        <img src={footerbackground} alt="footerbackground" />
      </div>
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__left__img">
            <img src={footerleft} alt="footerleft" />
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right__heading__and__tags">
            <div className="footer__right__heading">Contact</div>
            <div className="footer__right__span"></div>
            <div className="footer__right__all__tags">
              <div className="footer__right__content__tag">
                <a>Meander 251, 6825 MC Arnhem, the Netherlands</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="mailto:info@aigron.com">info@aigron.com</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="tel:+31648945452">+31648945452</a>
              </div>
            </div>
          </div>

          <div className="footer__right__heading__and__tags">
            <div className="footer__right__heading">Pages</div>
            <div className="footer__right__span"></div>
            <div className="footer__right__all__tags">
              <div className="footer__right__content__tag">
                <a href="#">About Us</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">Blogs</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">Careers</a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">Services</a>
              </div>
            </div>
          </div>
          <div className="footer__right__heading__and__tags">
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
