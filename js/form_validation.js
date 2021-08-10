import { errorMessage, results } from "./elements";
import { formSubmitLogic } from "./form_submit_logic";

export function formValidation(input) {
  if (!input.value) {
    //If the input field is empty
    results.style.visibility = "hidden";
    errorMessage.style.visibility = "visible";
    errorMessage.innerHTML = "Please insert a city";

    return;
  } else if (Number(input.value)) {
    //if the value is a number
    results.style.visibility = "hidden";
    errorMessage.style.visibility = "visible";
    errorMessage.innerHTML = "Please insert a valid city name";

    return;
  }
  //If the input is valid, then we'll trigger the click logic
  errorMessage.style.visibility = "hidden";
  formSubmitLogic();
}
