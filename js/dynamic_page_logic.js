import {
  results,
  aqiValue,
  city,
  body,
  container,
  button,
  icon,
  emoticon,
  suggestion1,
  suggestion2,
} from "./elements";

export function dynamicPage(res) {
  let color1, color2;
  let aqi;

  //Calculating the aqi
  if (!("pm10" in res.data.data.iaqi)) {
    aqi = res.data.data.iaqi.pm25.v;
  } else if (!("pm25" in res.data.data.iaqi)) {
    aqi = res.data.data.iaqi.pm10.v;
  } else {
    aqi = Math.max(res.data.data.iaqi.pm10.v, res.data.data.iaqi.pm25.v);
  }

  //Checking for the aqi
  if (aqi > 300) {
    //Setting the colors variables. We'll see wy later
    color1 = "#6a9113";
    color2 = "#141517";

    //Formatting the html for the gauge
    emoticon.innerHTML = "😨";
    icon.innerHTML = "<i class='fas fa-biohazard gauge__icon--max'></i>";

    //Formatting the html for the suggestions
    suggestion1.innerHTML =
      "Alright, now THIS is bad. A value greater than or equal to <strong class='suggestions__info--strong'> 301 </strong> means that the air is hazardous.";
    suggestion2.innerHTML =
      "Everyone should avoid all outdoor exertion. Probably, your local authorities will give you more specific directives.";
  } else if (aqi > 200) {
    color1 = "#ffe000";
    color2 = "#799f0c";

    emoticon.innerHTML = "😰";
    icon.innerHTML = "<i class='fas fa-thermometer-full gauge__icon'></i>";

    suggestion1.innerHTML =
      "Really bad. A value beetween <strong class='suggestions__info--strong'> 201 </strong> and <strong class='suggestions__info--strong'> 300 </strong> means that the air is very unhealthy. Please, go outside only if you really need to.";
    suggestion2.innerHTML =
      "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.";
  } else if (aqi > 150) {
    color1 = "#f3f9a7";
    color2 = "#cac531";

    emoticon.innerHTML = "😥";
    icon.innerHTML =
      "<i class='fas fa-thermometer-three-quarters gauge__icon'></i>";

    suggestion1.innerHTML =
      "A value beetween <strong class='suggestions__info--strong'> 151 </strong> and <strong class='suggestions__info--strong'> 200 </strong> is bad. Even if you are a healthy person, you could experience health effects. If you are an at risk class, then you could experience serious health effects.";
    suggestion2.innerHTML =
      "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion.";
  } else if (aqi > 100) {
    color1 = "#f1f2b5";
    color2 = "#135058";

    emoticon.innerHTML = "😐";
    icon.innerHTML = "<i class='fas fa-thermometer-half gauge__icon'></i>";

    suggestion1.innerHTML =
      "If you have some kind of respiratory disease or you are sensitive to air pollution, then a value beetween <strong class='suggestions__info--strong'> 101 </strong> and <strong class='suggestions__info--strong'> 150 </strong> is dangerous.";
    suggestion2.innerHTML =
      "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.";
  } else if (aqi > 50) {
    color1 = "#00b4db";
    color2 = "#0083b0";

    emoticon.innerHTML = "🙂";
    icon.innerHTML = "<i class='fas fa-thermometer-quarter gauge__icon'></i>";

    suggestion1.innerHTML =
      "Not bad. A value beetween <strong class='suggestions__info--strong'> 51 </strong> and <strong class='suggestions__info--strong'> 100 </strong> is acceptable. However, if you are unusually sensitive to air pollution, you should be careful.";
    suggestion2.innerHTML =
      "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.";
  } else {
    color1 = "#56ccf2";
    color2 = "#2f80ed";

    emoticon.innerHTML = "😊";
    icon.innerHTML = "<i class='fas fa-thermometer-empty gauge__icon'></i>";

    suggestion1.innerHTML =
      "Nice! A value between <strong class='suggestions__info--strong'> 0 </strong> and <strong class='suggestions__info--strong'> 50 </strong> is really good. You can safely stay outside without any danger.";
    suggestion2.innerHTML =
      "There are no cautionary statements you should take. Go outside and take a run!";
  }

  //Changing the colors accordingly to the aqi
  icon.style.color = color2;
  body.style.background = `linear-gradient(to bottom right, ${color2}, ${color1})`;
  container.style.background = `linear-gradient(to bottom right, ${color2}, ${color1})`;
  button.addEventListener(
    "mouseenter",
    () => (button.style.background = color1)
  );
  button.addEventListener(
    "mouseleave",
    () => (button.style.background = "#dee2e6")
  );

  //Showing the icon
  emoticon.style.visibility = "visible";

  //Changing the informations about the results
  results.style.visibility = "visible";
  aqiValue.innerHTML = aqi;
  city.innerHTML = res.data.data.city.name;
}
