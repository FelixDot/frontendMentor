import ArcadeLogo from "../assets/images/icon-arcade.svg";
import AdvancedLogo from "../assets/images/icon-advanced.svg";
import ProLogo from "../assets/images/icon-pro.svg";

const StepTwo = ({ onChange, plan, yearly }) => {
  const planOptions = [
    { name: "Arcade", yearPayment: "90", monthPayment: "9", logo: ArcadeLogo },
    {
      name: "Advanced",
      yearPayment: "120",
      monthPayment: "12",
      logo: AdvancedLogo,
    },
    { name: "Pro", yearPayment: "150", monthPayment: "15", logo: ProLogo },
  ];

  const handleYearlyChange = (newYearly) => {
    const selectedPlan = planOptions.find(
      (option) => option.name === plan.name
    );
    const newPayment = newYearly
      ? selectedPlan.yearPayment
      : selectedPlan.monthPayment;

    onChange(selectedPlan, newYearly, newPayment);
  };
  return (
    <div className="step">
      <h2 className="title">Select your plan</h2>
      <p className="info"> You have the option of monthly or yearly billing.</p>
      <div className="plans-conatainer">
        {planOptions.map((option, index) => (
          <label
            htmlFor={option.name}
            className={`plan-box ${
              option.name === plan.name ? "active-input" : null
            }`}
            key={index}
          >
            <input
              id={option.name}
              type="radio"
              name="plan"
              value={option.payment}
              checked={option.name === plan.name}
              onChange={() => {
                const payment = yearly
                  ? option.yearPayment
                  : option.monthPayment;
                onChange(option, yearly, payment);
              }}
            />
            <img
              className="plan-logo"
              src={option.logo}
              alt={`${option.name} logo`}
            />
            <div className="plan-text">
              <p className="primary-text">{option.name}</p>
              <p className="secondary-text">
                {yearly
                  ? `$${option.yearPayment}/yr`
                  : `$${option.monthPayment}/mo`}
              </p>
              {yearly && <p className="free-text">2 months free</p>}
            </div>
          </label>
        ))}
      </div>
      <div id="playment-switch" className="playment-switch">
        <span className={!yearly ? "switch-active" : null}>Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            name="yearly"
            checked={yearly}
            onChange={() => handleYearlyChange(!yearly)}
          />
          <span className="slider round"></span>
        </label>
        <span className={yearly ? "switch-active" : null}>Yearly</span>
      </div>
    </div>
  );
};

export default StepTwo;
