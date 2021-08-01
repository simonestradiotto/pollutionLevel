import { input, errorMessage, results } from "./elements";
import { dynamicPage } from "./dynamic_page_logic";

export function clickLogic() {
  axios(
    `https://api.waqi.info/feed/${input.value}/?token=${process.env.API_TOKEN}`
  )
    .then((res) => {
      if (res.data.status == "error") {
        throw new Error(res.data.data);
      }
      //If the response status is ok, then the page will be formatted accordingly
      dynamicPage(res);
    })
    .catch((err) => {
      errorMessage.style.visibility = "visible";
      results.style.visibility = "hidden";
      //If the selected city is not near any available station, then invite the user to try with some other city
      if (err.toString().includes("Unknown station")) {
        errorMessage.innerHTML = `Ups! Apparently this station is not available. Try with something else!`;
      }
    });
}
