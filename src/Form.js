function Form({ handleChange, handleSubmit, placeholder }) {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
