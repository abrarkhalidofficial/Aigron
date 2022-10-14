import formbackground from "../assets/form-background.png";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setNameError("Name is required");
    } else if (company.length === 0) {
      setCompanyError("Company is required");
    } else if (email.length === 0) {
      setEmailError("Email is required");
    } else if (category.length === 0) {
      setCategoryError("Subject is required");
    } else if (message.length === 0) {
      setMessageError("Message is required");
    } else {
      axios.post("https://aigron-production.up.railway.app/api/contact", {
        name,
        company,
        email,
        phone,
        category,
        message,
      });
      setTimeout(() => {
        setSuccess(true);
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setCategory("");
        setMessage("");
        console.log("submitted");
      }, 1000);
    }
  };
  const handleNameChange = (e) => {
    if (e.target.value.length === 0) {
      setNameError("Name is required");
    } else {
      setName(e.target.value);
      setNameError("");
    }
  };
  const handleCompanyChange = (e) => {
    if (e.target.value.length === 0) {
      setCompanyError("Company is required");
    } else {
      setCompany(e.target.value);
      setCompanyError("");
    }
  };
  const handleEmailChange = (e) => {
    if (e.target.value.length === 0) {
      setEmailError("Email is required");
    } else {
      setEmail(e.target.value);
      setEmailError("");
    }
  };
  const handlePhoneChange = (e) => {
    setPhone(e);
  };
  const handleCategoryChange = (e) => {
    if (e.target.value.length === 0) {
      setCategoryError("Category is required");
    } else {
      setCategory(e.target.value);
      setCategoryError("");
    }
  };

  const handleMessageChange = (e) => {
    if (e.target.value.length === 0) {
      setMessageError("Message is required");
    } else if (e.target.value.length < 50) {
      setMessageError("Message should be at least 50 characters");
    } else {
      setMessage(e.target.value);
      setMessageError("");
    }
  };
  return (
    <section className="form" id="contact">
      <div className="form__img">
        <img src={formbackground} alt="formbackground" />
      </div>
      <div className="form__content">
        <div className="form__content__left">
          <div className="form__content__heading">Get in Touch</div>
        </div>
        <div className="form__content__right">
          <form
            className="form__content__right__container"
            onSubmit={handleSubmit}
          >
            {success ? (
              <div className="success">Message sent successfully</div>
            ) : (
              <>
                <div className="form__content__right__heading">Let’s Talk</div>
                <div className="form__content__right__inputs">
                  <div className="form__content__right__form">
                    <div className="form__content__right__form__heading">
                      Name
                    </div>
                    <div className="form__content__right__form__input">
                      <input
                        type="Name"
                        placeholder=" Name"
                        onChange={handleNameChange}
                      />
                    </div>
                    <div className="form__content__right__form__heading__error">
                      {nameError}
                    </div>
                  </div>
                  <div className="form__content__right__form">
                    <div className="form__content__right__form__heading">
                      Company Name
                    </div>
                    <div className="form__content__right__form__input">
                      <input
                        type="Name"
                        placeholder=" Company Name"
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div className="form__content__right__form__heading__error">
                      {companyError}
                    </div>
                  </div>
                </div>
                <div className="form__content__right__inputs">
                  <div className="form__content__right__form">
                    <div className="form__content__right__form__heading">
                      Email
                    </div>
                    <div className="form__content__right__form__input">
                      <input
                        type="email"
                        name="emial"
                        id="email"
                        placeholder=" Email"
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="form__content__right__form__heading__error">
                      {emailError}
                    </div>
                  </div>
                  <div className="form__content__right__form">
                    <div className="form__content__right__form__heading">
                      Mobile (optional)
                    </div>
                    <div className="form__content__right__form__input__phone">
                      <PhoneInput
                        className="phone-input"
                        international
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form__content__right__inputs">
                  <div className="form__content__right__form">
                    <div className="form__content__right__form__heading">
                      Subject
                    </div>
                    <div className="form__content__right__form__input">
                      <input
                        type="text"
                        list="categories"
                        name="category"
                        id="category"
                        placeholder="Subject"
                        onChange={handleCategoryChange}
                      />
                      <datalist id="categories">
                        <option value="Hire Professionals" />
                        <option value="Software development" />
                        <option value="Recuitment" />
                      </datalist>
                    </div>
                    <div className="form__content__right__form__heading__error">
                      {categoryError}
                    </div>
                  </div>
                </div>
                <div className="form__content__right__inputs">
                  <div className="form__content__right__form">
                    <div className="form__content__right__form__heading">
                      How can we help you ?
                    </div>
                    <div className="form__content__right__form__input">
                      <textarea
                        cols="30"
                        rows="6"
                        name="text"
                        id="text"
                        placeholder=" Give Some Details About Your Project"
                        onChange={handleMessageChange}
                      ></textarea>
                    </div>
                    <div className="form__content__right__form__heading__error">
                      {messageError}
                    </div>
                  </div>
                </div>
                <div className="contact__form__btn">
                  <button
                    type="submit"
                    className="home__section__buttons__btn home__section__buttons__btn__secondary"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
