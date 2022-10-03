import formbackground from "../assets/form-background.png";
import PhoneInput from "react-phone-number-input";

export function form(value, setValue) {
  return (
    <section className="form">
      <div className="form__img">
        <img src={formbackground} alt="formbackground" />
      </div>
      <div className="form__content">
        <div className="form__content__left">
          <div
            className="form__content__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Get in touch
          </div>
        </div>
        <div className="form__content__right">
          <div className="form__content__right__heading">Let’s Talk</div>
          <div
            className="form__content__right__inputs"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1400"
          >
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">Name</div>
              <div className="form__content__right__form__input">
                <input type="Name" placeholder="Enter Name" />
              </div>
            </div>
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">
                Company Name(Optional)
              </div>
              <div className="form__content__right__form__input">
                <input type="Name" placeholder="Enter type Your Company Name" />
              </div>
            </div>
          </div>
          <div
            className="form__content__right__inputs"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1400"
          >
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">Email*</div>
              <div className="form__content__right__form__input">
                <input
                  type="email"
                  name="emial"
                  id="email"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">
                Mobile(Optional)
              </div>
              <div className="form__content__right__form__input">
                <PhoneInput
                  international
                  defaultCountry="RU"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
          </div>
          <div
            className="form__content__right__inputs"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1400"
          >
            <div className="form__content__right__form">
              <div className="form__content__right__form__heading">Subject</div>
              <div className="form__content__right__form__input">
                <input type="text" name="text" id="text" placeholder="Enter" />
              </div>
            </div>
          </div>
          <div
            className="form__content__right__inputs"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1400"
          >
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
          <div
            className="form__content__right__button"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1600"
          >
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
