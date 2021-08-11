import { errorMessage } from "./elements";
import { dynamicPageStyling } from "./dynamic_page_styling";
import get from "lodash.get";

export async function success(pos) {
  try {
    const coords = pos.coords;
    //Sending a request with the current coords
    let res = await axios(
      `https://api.waqi.info/feed/geo:${coords.latitude};${coords.longitude}/?token=${process.env.API_TOKEN}`
    );

    //If the path for the status has changed, we'll throw an error
    let status = get(res, "data.status", "pathError");
    if (status === "error") {
      throw new Error(get(res, "data.data", "wrongPath"));
    } else if (status === "pathError") {
      throw new Error("wrongPath");
    }
    //Modify the page's style and html
    dynamicPageStyling(res);
  } catch (err) {
    errorMessage.innerHTML =
      "Apparently, there are no stations nearby you. Try to enter a city name!";

    //If the path for the data has changed, then we'll invite the user to wait and retry later.
    if (err.toString().includes("wrongPath")) {
      errorMessage.innerHTML = `Apparently we are having some problems with retrieving the data. Please try later.`;
    }

    errorMessage.style.visibility = "visible";
  }
}
