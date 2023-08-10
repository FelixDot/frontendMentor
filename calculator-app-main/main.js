document.addEventListener("DOMContentLoaded", function () {
  const themeControl = document.getElementById("3-way-switch");
  const theme1 = document.getElementById("theme-1");
  const theme2 = document.getElementById("theme-2");
  const theme3 = document.getElementById("theme-3");
  const body = document.getElementById("theme");

  const display = document.getElementById("display");
  const buttons = document.getElementsByClassName("key");

  function toggleTheme(radio) {
    if (radio.checked) {
      body.className = radio.value;
    }
  }

  let radios = document.querySelectorAll("input[type=radio]");
  radios.forEach((radio) =>
    radio.addEventListener("click", () => toggleTheme(radio))
  );

  function clearScreen() {
    document.getElementById("display").textContent = "";
  }

  document.getElementById("reset").addEventListener("click", clearScreen);

  let input = "";

  document.querySelectorAll(".number, .operator").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "." && input.includes(".")) {
        return;
      }
      if (value === "0" && input === "0") {
        return;
      }
      if (
        input.length > 0 &&
        isOperator(value) &&
        isOperator(input[input.length - 1])
      ) {
        input = input.slice(0, input.length - 1);
      }

      input += value === "x" ? "*" : value;
      display.innerText = input;
    });
  });

  document.getElementById("equals").addEventListener("click", () => {
    if (input.length === 0) {
      return;
    }

    try {
      let result = eval(input);
      display.innerText = result;
      input = result.toString();
    } catch (error) {
      display.innerText = "Error";
      input = "";
    }
  });

  document.getElementById("reset").addEventListener("click", () => {
    input = "";
    display.innerText = "";
  });

  document.getElementById("delete").addEventListener("click", () => {
    input = input.slice(0, input.length - 1);
    display.innerText = input;
  });

  document.getElementById("value").addEventListener("click", () => {
    console.log(input);
  });

  function isOperator(value) {
    return ["+", "-", "*", "/"].includes(value);
  }
});
