import "./LinkForm.scss";

const LinkForm = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Shorten a link here..."
      />
      <button className="form__button">Shorten it!</button>
    </form>
  );
};

export default LinkForm;
