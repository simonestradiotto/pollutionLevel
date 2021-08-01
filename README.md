# Pollution level detector

## Try it: https://distracted-volhard-ae2c1e.netlify.app/

Welcome!

This app will help you detect pollution in cities.

## Getting started


The usage is really straightforward.

When you first open the application, it'll ask for your current position; that's because it'll try to detect pollution in your current area.

If you don't want to give your position, it's fine: just enter a city name in the form and you are good.

This app doesn't require you to install anything. Enjoy it!

## The results


After a city is correctly submitted, on the right of the form you'll find a widget with the name of the location you choose and a number.

That number is the Air Quality Index, provided by "[The World Air Quality Project](https://aqicn.org/map/world/)".

For more detailed information about the AQI values, you can check out [this page](https://aqicn.org/scale/).

## Important notes

Unfortunately, the AICQN API has a weird bug with Japanese city, where the results instead of being numerical is the string '-'. 

I'm sorry for this inconvenience, but I have to ask you to avoid Japanese cities.

## Contacts


Mail ----> [simone.stradiotto@libero.it](mailto:simone.stradiotto@libero.it)

## Acknowledgements

---

- [Webpack](https://webpack.js.org/)
- [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Axios](https://axios-http.com/)
- [iconmonstr](https://iconmonstr.com/)
- [Netlify](https://www.netlify.com/)
