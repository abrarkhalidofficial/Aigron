import footerleft from "../assets/footer-left.png";
import footerbackground from "../assets/footer-background.png";

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
            <div className="footer__right__heading">Social</div>
            <div className="footer__right__span"></div>
            <div className="footer__right__all__tags">
              <div className="footer__right__content__tag">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  Linkedin
                </a>
              </div>
              <div className="footer__right__content__tag">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
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
                <a href="#">Projects</a>
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
