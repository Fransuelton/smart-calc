import { calculate } from "./calculate.js";

export function handleClick(buttonValue, display) {
  switch (buttonValue) {
    case "AC":
      display.value = "";
      break;
    case "DEL":
      display.value = display.value.slice(0, -1);
      break;
    case "=":
      display.value = calculate(display.value);
      break;
    default:
      display.value += buttonValue;
      break;
  }
}
