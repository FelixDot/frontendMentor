const StepOneInput = ({ label, placeholder, value, onChange, id, type }) => {
  return (
    <div className="step-one-input">
      <div className="labels">
        <label className="text-input-label" htmlFor={id}>
          {label}
        </label>

      </div>
      <input
        className="text-input"
        id={id}
        type={type}
        placeholder={placeholder}
        autoFocus
        name={id}
        required
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default StepOneInput;
