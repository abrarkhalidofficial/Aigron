import formbackground from "../assets/form-background.png";
import PhoneInput from "react-phone-number-input";

export function ContactSection() {
  return (
    <section className="form">
      <div className="form__img">
        <img src={formbackground} alt="formbackground" />
      </div>
      <div className="form__content">
        <div className="form__content__left">
          <div className="form__content__heading">Get in Touch</div>
        </div>
        <div className="form__content__right">
          <div className="form__content__right__heading">Let’s Talk</div>
          <div className="form__content__right__inputs">
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">Name</div>
              <div className="form__content__right__form__input">
                <input type="Name" placeholder="Enter Name" />
              </div>
            </div>
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">
                Company Name
              </div>
              <div className="form__content__right__form__input">
                <input type="Name" placeholder="Enter Company Name" />
              </div>
            </div>
          </div>
          <div className="form__content__right__inputs">
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">Email*</div>
              <div className="form__content__right__form__input">
                <input
                  type="email"
                  name="emial"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">Mobile</div>
              <div className="form__content__right__form__input__phone">
                <PhoneInput
                  className="phone-input"
                  international
                  defaultCountry="RU"
                  onChange={(e) => {
                    console.log(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form__content__right__inputs">
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">Subject</div>
              <div className="form__content__right__form__input">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
          </div>
          <div className="form__content__right__inputs">
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">
                How Can We help You ?
              </div>
              <div className="form__content__right__form__input">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter Give Some Details About Your Project"
                />
              </div>
            </div>
          </div>
          <div className="contact__form__btn">
            <button className="home__section__buttons__btn home__section__buttons__btn__secondary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
