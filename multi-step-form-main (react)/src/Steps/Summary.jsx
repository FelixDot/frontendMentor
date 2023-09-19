const Summary = ({ yearly, plan, addons, goTo }) => {
  const Total = () => {
    let gesamtkosten = parseFloat(plan.payment);

    for (const addon of addons) {
      gesamtkosten += parseFloat(
        yearly ? addon.yearPayment : addon.monthPayment
      );
    }
    return gesamtkosten;
  };
  const totalPay = Total();
  return (
    <div className="step">
      <h2 className="title">Finishing up</h2>
      <p className="info">Double-chekc everything looks OK before confirming</p>
      <div className="summary-container">
        <div className="summary-plan">
          <div>
            <p>
              {plan.name}
              {yearly ? " (Yearly)" : " (Monthly)"}
            </p>
            <button  className="change-btn" type="button" onClick={() => goTo()}>
              Change
            </button>
          </div>
          {yearly ? `+$${plan.payment}/yr` : `$${plan.payment}/mo`}
        </div>
        <hr />
        <div>
          {addons.map((addon, index) => (
            <div className="summary-addon" key={index}>
              <p>{addon.name}</p>
              <p className="summary-addon-pay">
                {yearly
                  ? `+$${addon.yearPayment}/yr`
                  : `$${addon.monthPayment}/mo`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="summary-total">
        <span>Total {yearly ? " (per year)" : " (per month)"}</span>
        <span className="total-pay">
          {`+$${totalPay}`}
          {yearly ? "/yr" : "/mo"}
        </span>
      </div>
    </div>
  );
};

export default Summary;
