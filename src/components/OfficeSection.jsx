import officesvg from "../assets/officesome.svg";

export function OfficeSection() {
  return (
    <section className="office">
      <div className="office__content__heading">Our Office</div>
      <div className="office__content">
        <div className="office__content__svg">
          <img src={officesvg} alt="some svg" />
        </div>
        <div className="office__content__button">
          <button className="office__content__button__one">
            <button className="office__content__button__one__one">
              <div className="office__content__button__one__content">
                <div className="office__content__button__one__content__heading">
                  Pakistan Office
                </div>
                <div className="office__content__button__one__content__info">
                  +92 0554 6768865 <br /> Main Gulburg Road, Lahore
                </div>
              </div>
            </button>
          </button>
          <button className="office__content__button__two">
            <button className="office__content__button__one__two">
              {" "}
              <div className="office__content__button__two__content">
                <div className="office__content__button__two__content__heading">
                  Romania Office
                </div>
                <div className="office__content__button__two__content__info">
                  +92 0554 6768865 <br /> Main Gulburg Road, Lahore
                </div>
              </div>
            </button>
          </button>
          <button className="office__content__button__three">
            <button className="office__content__button__one__three">
              {" "}
              <div className="office__content__button__three__content">
                <div className="office__content__button__three__content__heading">
                  Netherlands Office
                </div>
                <div className="office__content__button__three__content__info">
                  +92 0554 6768865 <br /> Main Gulburg Road, Lahore
                </div>
              </div>
            </button>
          </button>
          <button className="office__content__button__four">
            <button className="office__content__button__one__four">
              {" "}
              <div className="office__content__button__four__content">
                <div className="office__content__button__four__content__heading">
                  Kuwait Office
                </div>
                <div className="office__content__button__four__content__info">
                  +92 0554 6768865 <br /> Main Gulburg Road, Lahore
                </div>
              </div>
            </button>
          </button>
          <button className="office__content__button__five">
            <button className="office__content__button__one__five">
              {" "}
              <div className="office__content__button__five__content">
                <div className="office__content__button__five__content__heading">
                  Germany Office
                </div>
                <div className="office__content__button__five__content__info">
                  +92 0554 6768865 <br /> Main Gulburg Road, Lahore
                </div>
              </div>
            </button>
          </button>
          <button className="office__content__button__six">
            <button className="office__content__button__one__six">
              {" "}
              <div className="office__content__button__six__content">
                <div className="office__content__button__six__content__heading">
                  Singapore Office
                </div>
                <div className="office__content__button__six__content__info">
                  +92 0554 6768865 <br /> Main Gulburg Road, Lahore
                </div>
              </div>
            </button>
          </button>
        </div>
      </div>
    </section>
  );
}
