document.addEventListener("DOMContentLoaded", function () {
  const themeControl = document.getElementById("3-way-switch");
  const theme1 = document.getElementById("theme-1");
  const theme2 = document.getElementById("theme-2");
  const theme3 = document.getElementById("theme-3");
  const body = document.getElementById("theme");

  function toggleTheme(radio) {
    if (radio.checked) {
      body.className = radio.value;
    }
  }

  let radios = document.querySelectorAll("input[type=radio]");
  radios.forEach((radio) =>
    radio.addEventListener("click", () => toggleTheme(radio))
  );
});
