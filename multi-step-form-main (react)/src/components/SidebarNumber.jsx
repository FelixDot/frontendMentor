const SidebarNumber = ({ number, info, currentStep }) => {
  return (
    <div className="sidebar-step-container">
      <p
        className={`sidebar-number ${
          currentStep + 1 === number ? "active" : null
        }`}
      >
        {number}
      </p>
      <div>
        <p className="sidebar-step">Step {number}</p>
        <p className="sidebar-info">{info}</p>
      </div>
    </div>
  );
};
export default SidebarNumber;
