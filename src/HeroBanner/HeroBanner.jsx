import "./HeroBanner.scss";
import personTyping from "../assets/person_typing.svg";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero__left-container">
        <h1 className="hero__title">More than just shorter links</h1>
        <p className="hero__text">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="hero__button">Get Started</button>
      </div>
      <div className="hero__right-container">
        <img className="hero__image" src={personTyping} alt="person typing" />
      </div>
    </section>
  );
};

export default HeroBanner;
