const StepTree = ({ yearly, onChange, addons }) => {
  const Addons = [
    {
      name: "Online service",
      info: "Access to multiplayer games",
      yearPayment: "10",
      monthPayment: "1",
    },
    {
      name: "Larger storage",
      info: "Extra 1TB of cloud save",
      yearPayment: "20",
      monthPayment: "2",
    },
    {
      name: "Customizable profile",
      info: "Custom theme on your profile",
      yearPayment: "20",
      monthPayment: "2",
    },
  ];
  return (
    <div className="step">
      <h2 className="title">Pick add-ons</h2>
      <p className="info">Add-ons help enhance your gaming experience.</p>
      <div className="addons">
        {Addons.map((addon, index) => (
          <label
            className={`addon ${
              addons.some((selectedAddon) => selectedAddon.name === addon.name)
                ? `active-input`
                : null
            }`}
            key={index}
          >
            <input
              type="checkbox"
              value={addon}
              checked={addons.some(
                (selectedAddon) => selectedAddon.name === addon.name
              )}
              onChange={(e) => onChange(e, addon)}
            />

            <div className="addon-info">
              <p className="primary-text">{addon.name}</p>
              <p className="secondary-text">{addon.info}</p>
            </div>
            <p className="addon-payment">
              {yearly
                ? `+$${addon.yearPayment}/yr`
                : `+$${addon.monthPayment}/mo`}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StepTree;
