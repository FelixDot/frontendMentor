// JavaScript for Interactive Rating Component

document.addEventListener("DOMContentLoaded", function () {
  // Get all the rating buttons
  const ratingButtons = document.querySelectorAll(".rating-vote-button");

  // Add click event listeners to each rating button
  ratingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove the 'active' class from all buttons
      ratingButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add the 'active' class to the clicked button
      button.classList.add("active");
    });
  });

  // Get the submit button and thank you screen element
  const submitButton = document.getElementById("submit-btn");
  const thankYouScreen = document.querySelector(".thank-you-screen");

  // Add click event listener to the submit button
  submitButton.addEventListener("click", function (event) {
    // Prevent the default form submission behavior (no reloading page!)
    event.preventDefault();

    // Get the selected rating
    const selectedRatingElement = document.querySelector(
      ".rating-vote-button.active"
    );
    if (!selectedRatingElement) {
      // If no rating is selected, do nothing

      return;
    }

    // Get the rating value from the selected button
    const ratingValue = selectedRatingElement.innerText;

    // Get the element where the rating will be displayed on the thank you screen
    const ratingSelectedElement = document.getElementById("rating-selected");

    // Set the rating value on the thank you screen
    ratingSelectedElement.innerText = ratingValue;

    // Hide the rating screen and show the thank you screen
    document.querySelector(".rating-screen").style.display = "none";
    thankYouScreen.style.display = "block";
  });
});
