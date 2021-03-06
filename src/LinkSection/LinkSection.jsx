import "./LinkSection.scss";
import LinkDisplay from "../LinkDisplay";
import LinkForm from "../LinkForm";

import { connect } from "react-redux";

const LinkSection = ({ links, message }) => {
  console.log(links);
  return (
    <section className="link-section">
      <LinkForm />
      <div className="link-section__wrapper">
        {message && (
          <p className="link-section__message">
            {message === "true"
              ? "Success!"
              : "Fail! Either the URL is empty or invalid"}
          </p>
        )}

        {links.length === 0 && (
          <>
            <h2 className="link-section">Advanced Statistics</h2>
            <p className="link-section__text">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </>
        )}
        {links.length > 0 &&
          [...links].reverse().map((link) => <LinkDisplay link={link} />)}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  links: state.links,
  message: state.message,
});

export default connect(mapStateToProps, null)(LinkSection);
