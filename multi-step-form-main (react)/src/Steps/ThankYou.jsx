import ThankYouLogo from "../assets/images/icon-thank-you.svg";
const ThankYou = () => {
  return (
    <div className="thank-you">
      <img src={ThankYouLogo} alt="Thank you logo" />
      <h2 className="title">Thank you!</h2>
      <p className="info thank-you-message">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
