import Ideasection from "../assets/idea.png";
import Idealogo from "../assets/idea-logo.png";

export function IdeaSection() {
  return (
    <section className="idea">
      <div className="idea__img">
        <img src={Ideasection} alt="Ideasection" />
      </div>
      <div className="idea__content">
        <div className="idea__content__logo">
          <img src={Idealogo} alt="Idealogo" />
        </div>
        <div className="idea__content__heading">
          You share your needs. We provide.
        </div>
        <div className="idea__content__info">
          We are a global provider of AI and Data services, with highly
          experienced AI and Data professionals. With offices and staff from
          around the world, we can be close to our customers and understand
          their needs and interact easily with them for expanding their
          development capabilities and developing successful products in their
          digitalization road map.
        </div>
      </div>
    </section>
  );
}
