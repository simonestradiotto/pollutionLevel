import { errorMessage } from "./elements";
import { dynamicPage } from "./dynamic_page_logic";

export function success(pos) {
  const coords = pos.coords;
  //Sending a request with the current coords
  axios(
    `https://api.waqi.info/feed/geo:${coords.latitude};${coords.longitude}/?token=${process.env.API_TOKEN}`
  )
    .then((res) => {
      if (res.data.status == "error") {
        throw new Error(res.data.data);
      }
      //Modify the page's style and html
      dynamicPage(res);
    })
    .catch(() => {
      //This also funtion as the default error message
      errorMessage.style.visibility = "visible";
      errorMessage.innerHTML =
        "Apparently, there are no stations nearby you. Try to enter a city name!";
    });
}
