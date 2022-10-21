import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import PhoneInput from "react-phone-number-input";

export default function ApplyPopup({ onClose }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [Sirname, setSirname] = useState("");
  const [SirnameError, setSirnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [LinkedInError, setLinkedInError] = useState("");
  const [Motivatoin, setMotivatoin] = useState("");
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
    } else if (Sirname.length === 0) {
      setSirnameError("Sirname is required");
    } else if (email.length === 0) {
      setEmailError("Email is required");
    } else if (LinkedIn.length === 0) {
      setLinkedInError("Subject is required");
    } else {
      axios.post("https://aigron-production.up.railway.app/api/career", {
        name,
        sirname: Sirname,
        email,
        phone,
        linkedIn: LinkedIn,
        motivatoin: Motivatoin,
      });
      setTimeout(() => {
        setSuccess(true);
        setName("");
        setSirname("");
        setEmail("");
        setPhone("");
        setLinkedIn("");
        setMotivatoin("");
        console.log("submitted");
        onClose(false);
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
  const handleSirnameChange = (e) => {
    if (e.target.value.length === 0) {
      setSirnameError("Sirname is required");
    } else {
      setSirname(e.target.value);
      setSirnameError("");
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
  const handleLinkedInChange = (e) => {
    if (e.target.value === "") {
      setLinkedInError("LinkedIn is required");
    } else {
      setLinkedIn(e.target.value);
      setLinkedInError("");
    }
  };

  const handleMotivatoinChange = (e) => {
    setMotivatoin(e.target.value);
  };
  return (
    <div className="popup">
      <form
        onSubmit={handleSubmit}
        className="form__content__right__container"
        style={{
          minHeight: "fit-content",
          height: "fit-content",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        {success ? (
          <div className="success">Application sent successfully</div>
        ) : (
          <>
            <div className="form__content__right__heading">
              Apply for career
              <X size={20} onClick={() => onClose(false)} />
            </div>
            <div className="form__content__right__inputs">
              <div className="form__content__right__form">
                <div className="form__content__right__form__heading">Name</div>
                <div className="form__content__right__form__input">
                  <input
                    type="text"
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
                  Sir name
                </div>
                <div className="form__content__right__form__input">
                  <input
                    type="text"
                    placeholder="Sir name"
                    onChange={handleSirnameChange}
                  />
                </div>
                <div className="form__content__right__form__heading__error">
                  {SirnameError}
                </div>
              </div>
            </div>
            <div className="form__content__right__inputs">
              <div className="form__content__right__form">
                <div className="form__content__right__form__heading">Email</div>
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
                  Mobile
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
                  LinkedIn
                </div>
                <div className="form__content__right__form__input">
                  <input
                    type="text"
                    name="LinkedIn"
                    id="LinkedIn"
                    placeholder="LinkedIn"
                    onChange={handleLinkedInChange}
                  />
                </div>
                <div className="form__content__right__form__heading__error">
                  {LinkedInError}
                </div>
              </div>
            </div>
            <div className="form__content__right__inputs">
              <div className="form__content__right__form">
                <div className="form__content__right__form__heading">
                  Motivation (optional)
                </div>
                <div className="form__content__right__form__input">
                  <textarea
                    cols="30"
                    rows="6"
                    name="text"
                    id="text"
                    placeholder="Give some info about your motivation"
                    onChange={handleMotivatoinChange}
                  />
                </div>
                <div className="form__content__right__form__heading__error"></div>
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
  );
}
