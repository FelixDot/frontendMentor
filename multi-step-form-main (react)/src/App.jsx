import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import Summary from "./Steps/Summary";
import ThankYou from "./Steps/ThankYou";
import SidebarNumber from "./components/SidebarNumber";
import { useMultistepFrom } from "./Hook/useMultistepFrom";
const FormItems = {
  name: "",
  email: "",
  phone: "",
  yearly: false,
  plan: { name: "Arcade", payment: "9" },
  addons: [],
};

function App() {
  const [formdata, setFormData] = useState(FormItems);

  const updateFrom = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handlePlanSelection = (plan, yearly, payment) => {
    setFormData({
      ...formdata,
      plan: { name: plan.name, payment: payment },
      yearly: yearly,
    });
  };

  const goToSectionPlan = () => {
    goTo(1);
  };
  const handleAddonSelection = (e, addon) => {
    if (e.target.checked) {
      const newAddon = {
        name: addon.name,
        yearPayment: addon.yearPayment,
        monthPayment: addon.monthPayment,
      };
      let updatedAddons = [...formdata.addons];
      updatedAddons.push(newAddon);

      setFormData({ ...formdata, addons: updatedAddons });
    } else {
      const updatedAddons = formdata.addons.filter(
        (item) => item.name !== addon.name
      );
      setFormData({ ...formdata, addons: updatedAddons });
    }
  };

  const {
    steps,
    step,
    currentStep,
    back,
    next,
    goTo,
    isFirstStep,
    isLastStep,
  } = useMultistepFrom({
    steps: [
      <StepOne {...formdata} onChange={updateFrom} />,
      <StepTwo {...formdata} onChange={handlePlanSelection} />,
      <StepThree {...formdata} onChange={handleAddonSelection} />,
      <Summary {...formdata} goTo={goToSectionPlan} />,
      <ThankYou />,
    ],
  });
  const onSubmit = (e) => {
    e.preventDefault();
    next();
  };
  return (
    <main className="container">
      <div className="sidebar">
        <div className="sidebar-list">
          <SidebarNumber number={1} info={"Your Info"} currentStep={currentStep} />
          <SidebarNumber number={2} info={"Select Plan"} currentStep={currentStep}/>
          <SidebarNumber number={3} info={"Add-ons"} currentStep={currentStep}/>
          <SidebarNumber number={4} info={"Summary"} currentStep={currentStep}/>
        </div>
      </div>
      <form className="form" onSubmit={onSubmit}>
        {step}

        {currentStep != steps.length - 1 && (
          <div className="navigation">
            {!isFirstStep && (
              <button className="back nav-button" type="button" onClick={back}>
                Go back
              </button>
            )}

            {currentStep > steps.length - 3 ? (
              <button className="confirm nav-button" type="submit">
                Confirm
              </button>
            ) : (
              <button className="next nav-button" type="submit">
                Next Step
              </button>
            )}
          </div>
        )}
      </form>
    </main>
  );
}

export default App;
