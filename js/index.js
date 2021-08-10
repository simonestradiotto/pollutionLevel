import "../sass/main.scss";
import { success } from "./geolocation";
import { button, input, mainContainer } from "./elements";
import { formValidation } from "./form_validation";

//The entry point of the application

//On load, the app ask for the current position of the user. If the user choose to not provide it, then the application just await for the button click
window.addEventListener("load", () => {
  //Making the content visible
  mainContainer.removeAttribute("hidden");
  navigator.geolocation.getCurrentPosition(success);
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  //If the button is clicked, then the input will be validate
  formValidation(input);
});
