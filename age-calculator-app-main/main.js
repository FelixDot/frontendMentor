document.addEventListener("DOMContentLoaded", function () {
  const red = "hsl(0, 100%, 67%)";
  const offWhite = "hsl(0, 1%, 44%)";
  const dayInput = document.getElementById("day-input");
  const monthInput = document.getElementById("month-input");
  const yearInput = document.getElementById("year-input");
  const submit = document.getElementById("submit-btn");

  function validateDay() {
    const dayLabel = document.getElementById("day-label");
    const dayError = document.getElementById("day-error");
    const day = dayInput.value;

    if (day === "") {
      dayLabel.style.color = red;
      dayInput.style.borderColor = red;
      dayError.textContent = "This field is required";
      return false;
    } else if (day < 1 || day > 31) {
      dayLabel.style.color = red;
      dayInput.style.borderColor = red;
      dayError.textContent = "Must be a valid day";
      return false;
    } else {
      clearError(dayLabel, dayInput, dayError);
      return true;
    }
  }

  function validateMonth() {
    const monthLabel = document.getElementById("month-label");
    const monthError = document.getElementById("month-error");
    const month = monthInput.value;

    if (month === "") {
      monthLabel.style.color = red;
      monthInput.style.borderColor = red;
      monthError.textContent = "This field is required";
      return false;
    } else if (month < 1 || month > 12) {
      monthLabel.style.color = red;
      monthInput.style.borderColor = red;
      monthError.textContent = "Must be a valid month";
      return false;
    } else {
      clearError(monthLabel, monthInput, monthError);
      return true;
    }
  }

  function validateYear() {
    const yearLabel = document.getElementById("year-label");
    const yearError = document.getElementById("year-error");
    const year = yearInput.value;

    const today = new Date();
    if (year === "") {
      yearLabel.style.color = red;
      yearInput.style.borderColor = red;
      yearError.textContent = "This field is required";
      return false;
    } else if (year < 1 || year > today.getFullYear()) {
      yearLabel.style.color = red;
      yearInput.style.borderColor = red;
      yearError.textContent = "Must be in the past";
      return false;
    } else {
      clearError(yearLabel, yearInput, yearError);
      return true;
    }
  }

  function validateDate() {
    let day = validateDay();
    let month = validateMonth();
    let year = validateYear();
    if (day && month && year) {
      const today = new Date();
      const selectedDate = new Date(
        yearInput.value,
        monthInput.value - 1,
        dayInput.value
      );

      const dayResultEL = document.getElementById("day-result");
      const monthResultEL = document.getElementById("month-result");
      const yearResultEL = document.getElementById("year-result");

      const diffTime = Math.abs(today - selectedDate);
      const diffDate = new Date(diffTime);
  
      const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
      const months = diffDate.getMonth();
      const days = diffDate.getDate() - 1;



      dayResultEL.textContent = days;
      monthResultEL.textContent = months;
      yearResultEL.textContent = years;
    }
  }

  function clearError(label, input, errorElement) {
    label.style.color = offWhite;
    input.style.borderColor = offWhite;
    errorElement.textContent = "";
  }

  submit.addEventListener("click", function (event) {
    event.preventDefault();
    validateDate();
  });
});
