import { input, errorMessage, results } from "./elements";
import { dynamicPageStyling } from "./dynamic_page_styling";
import get from "lodash.get";

export async function formSubmitLogic() {
  try {
    let res = await axios(
      `https://api.waqi.info/feed/${input.value}/?token=${process.env.API_TOKEN}`
    );

    //If the path for the status has changed, we'll throw an error
    let status = get(res, "data.status", "pathError");
    if (status === "error") {
      throw new Error(get(res, "data.data", "wrongPath"));
    } else if (status === "pathError") {
      throw new Error("wrongPath");
    }

    //If the response status is ok, then the page will be formatted accordingly
    dynamicPageStyling(res);
  } catch (err) {
    errorMessage.style.visibility = "visible";
    results.style.visibility = "hidden";

    //If the selected city is not near any available station, then invite the user to try with some other city
    if (err.toString().includes("Unknown station")) {
      errorMessage.innerHTML = `Ups! Apparently this station is not available. Try with something else!`;

      //If the path for the data has changed, then we'll invite the user to wait and retry later.
    } else if (err.toString().includes("wrongPath")) {
      errorMessage.innerHTML = `Apparently we are having some problems with retrieving the data. Please try later.`;
    }
  }
}
