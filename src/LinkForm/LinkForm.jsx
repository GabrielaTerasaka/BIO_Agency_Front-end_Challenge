import "./LinkForm.scss";
import { useState } from "react";

import { connect } from "react-redux";
import { getLink } from "../thunks";
import { updateMessage } from "../actions";

const LinkForm = ({ onGetLinkPressed, onEmptyInput }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Shorten a link here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="form__button"
        onClick={(e) => {
          e.preventDefault();
          if (inputValue === "") {
            onEmptyInput({ ok: false });
          } else {
            onGetLinkPressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Shorten it!
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onGetLinkPressed: (link) => dispatch(getLink(link)),
  onEmptyInput: (link) => dispatch(updateMessage(link)),
});

export default connect(null, mapDispatchToProps)(LinkForm);
