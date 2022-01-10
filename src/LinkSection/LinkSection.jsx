import "./LinkSection.scss";
import LinkDisplay from "../LinkDisplay";
import LinkForm from "../LinkForm";

const LinkSection = () => {
  const hasLink = false;
  return (
    <section className="link-section">
      <LinkForm />

      {!hasLink && (
        <div className="link-section__wrapper">
          <h2 className="link-section">Advanced Statistics</h2>
          <p className="link-section__text">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
      )}
      {hasLink && <LinkDisplay long="abcdef" short="abc" />}
    </section>
  );
};

export default LinkSection;
