import { handleClick } from "./handleClick.js";

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    handleClick(e.target.dataset.value, display)
  );
});
