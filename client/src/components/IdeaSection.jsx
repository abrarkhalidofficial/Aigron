import Ideasection from "../assets/idea.webp";
import Idealogo from "../assets/idea-logo.png";

export function IdeaSection() {
  return (
    <section className="idea__section">
      <div className="idea__section__content">
        <div className="idea__section__left">
          <img
            src={Idealogo}
            alt="Idealogo"
            className="idea__section__left__icon"
          />
          <div className="idea__section__left__heading">
            You share your needs. We provide.
          </div>
        </div>
        <div className="idea__section__right">
          We are a global provider of AI and Data services, with highly
          experienced AI and Data professionals. With offices and staff from
          around the world, we can be close to our customers and understand
          their needs and interact easily with them for expanding their
          development capabilities and developing successful products in their
          digitalization road map.
        </div>
      </div>
    </section>
    // <section className="idea">
    //   <div className="idea__img">
    //     <img src={Ideasection} alt="Ideasection" />
    //   </div>
    //   <div className="idea__content">
    //     <div className="idea__content__logo">
    //       <img src={Idealogo} alt="Idealogo" />
    //     </div>
    //     <div className="idea__content__heading">
    //       You share your needs. We provide.
    //     </div>
    //     <div className="idea__content__info">
    //       We are a global provider of AI and Data services, with highly
    //       experienced AI and Data professionals. With offices and staff from
    //       around the world, we can be close to our customers and understand
    //       their needs and interact easily with them for expanding their
    //       development capabilities and developing successful products in their
    //       digitalization road map.
    //     </div>
    //   </div>
    // </section>
  );
}
