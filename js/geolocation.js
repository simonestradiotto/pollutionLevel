import { errorMessage } from "./elements";
import { dynamicPageStyle } from "./dynamic_page_styling";

export async function success(pos) {
  try {
    const coords = pos.coords;
    //Sending a request with the current coords
    let res = await axios(
      `https://api.waqi.info/feed/geo:${coords.latitude};${coords.longitude}/?token=${process.env.API_TOKEN}`
    );

    if (res.data.status == "error") {
      throw new Error(res.data.data);
    }
    //Modify the page's style and html
    dynamicPageStyle(res);
  } catch (err) {
    //This also funtion as the default error message
    errorMessage.style.visibility = "visible";
    errorMessage.innerHTML =
      "Apparently, there are no stations nearby you. Try to enter a city name!";
  }
}
