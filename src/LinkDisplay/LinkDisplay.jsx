import "./LinkDisplay.scss";
import { useState, useEffect } from "react";

const LinkDisplay = ({ long, short }) => {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(shortLink) {
    navigator.clipboard.writeText(shortLink);
    setIsCopied(true);
  }
  return (
    <div className="link">
      <p className="link__long">{long}</p>
      <p className="link__short">{short}</p>
      <button
        className="form__button"
        onClick={() => {
          handleCopy(short);
        }}
      >
        {isCopied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default LinkDisplay;
