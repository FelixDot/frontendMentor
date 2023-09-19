import StepOneInput from "../components/StepOneInput";
const StepOne = ({ name, email, phone, onChange }) => {
  return (
    <div className="step">
      <h2 className="title">Personal Info</h2>
      <p className="info">
        Please provide your name, email address, and phone number.
      </p>
      <StepOneInput
        value={name}
        label="Name"
        id="name"
        onChange={onChange}
        placeholder="e.g. Stephen King"
        type="text"
      />
      <StepOneInput
        value={email}
        label="Email Address"
        id="email"
        onChange={onChange}
        placeholder="e.g. stephenking@lorem.com"
        type="email"
      />
      <StepOneInput
        value={phone}
        label="Phone Number"
        id="phone"
        onChange={onChange}
        placeholder="e.g. +1 234 564 890"
        type="number"
      />
    </div>
  );
};

export default StepOne;
