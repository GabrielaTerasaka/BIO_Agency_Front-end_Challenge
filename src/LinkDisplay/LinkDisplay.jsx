import "./LinkDisplay.scss";
import { useState, useEffect } from "react";

const LinkDisplay = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { full_short_link, original_link } = link.result;

  function handleCopy(shortLink) {
    navigator.clipboard.writeText(shortLink);
    setIsCopied(true);
  }
  return (
    <div className="link">
      <p className="link__long">{original_link}</p>
      <p className="link__short">{full_short_link}</p>
      <button
        className="form__button"
        onClick={() => {
          handleCopy(full_short_link);
        }}
      >
        {isCopied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default LinkDisplay;
