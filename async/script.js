'use strict';

// // 🌍 Select the button and container elements from the DOM
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// // 📝 Function to render country data on the page
// const renderCountry = data => {
//   // 🛠️ Create the HTML structure for a country card
//   const html = `
//     <article class="country">
//       <!-- 🖼️ Country flag -->
//       <img class="country__img" src="${data.flags.png}" alt="${
//     data.name.common
//   } Flag" />
//       <div class="country__data">
//         <!-- 🇨🇮 Country name with alternate spelling if available -->
//         <h3 class="country__name">${data.name.common} (${
//     data.altSpellings[1] || 'N/A'
//   })</h3>
//         <!-- 🌍 Region and subregion -->
//         <h4 class="country__region">${data.region} - ${data.subregion}</h4>
//         <!-- 🏛️ Capital city -->
//         <p class="country__row"><span>🏛️</span>Capital: ${data.capital[0]}</p>
//         <!-- 🗺️ Area in million square kilometers -->
//         <p class="country__row"><span>🗺️</span>Area: ${(
//           data.area / 1_000_000
//         ).toFixed(2)} million km²</p>
//         <!-- 👫 Population in millions -->
//         <p class="country__row"><span>👫</span>Population: ${(
//           +data.population / 1_000_000
//         ).toFixed(2)} million</p>
//         <!-- 🗣️ Languages spoken -->
//         <p class="country__row"><span>🗣️</span>Languages: ${Object.values(
//           data.languages
//         ).join(', ')}</p>
//         <!-- 💰 Currency name and code -->
//         <p class="country__row"><span>💰</span>Currency: ${
//           Object.values(data.currencies)[0].name
//         } (${Object.keys(data.currencies)[0]})</p>
//         <!-- ⌚ Timezones the country is in -->
//         <p class="country__row"><span>⌚</span>Timezones: ${data.timezones.join(
//           ', '
//         )}</p>
//         <!-- 🌍 Native name of the country, fallback to 'N/A' if unavailable -->
//         <p class="country__row"><span>🌍</span>Native Name: ${
//           data.name.nativeName
//             ? data.name.nativeName[Object.keys(data.name.nativeName)[0]].common
//             : 'N/A'
//         }</p>
//         <!-- 🏞️ Borders with other countries, or 'None' if no borders -->
//         <p class="country__row"><span>🏞️</span>Borders: ${
//           data.borders ? data.borders.join(', ') : 'None'
//         }</p>
//       </div>
//     </article>
//   `;

// //   // 🖇️ Insert the country card into the DOM
// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   // 🌟 Make the container visible
// //   countriesContainer.style.opacity = 1;
// // };

// // // 🗺️ Function to fetch country data and neighboring country data
// // const getCountryAndNeighbors = country => {
// //   const req = new XMLHttpRequest();

// //   // 🌐 Prepare the API request for the country
// //   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   req.send();

// //   // 📨 Wait for the response from the API
// //   req.addEventListener('load', () => {
// //     const [data] = JSON.parse(req.responseText); // 🗄️ Parse the response data
// //     renderCountry(data); // 🖼️ Render the country
// //     console.log(data); // 🖥️ Log the data for debugging

// //     // 🧭 Check if the country has any borders (neighboring countries)
// //     if (data.borders && data.borders.length > 0) {
// //       const neighbour = data.borders[0]; // 📍 Select the first neighboring country

// //       //! AJAX call 2 for the neighboring country
// //       const req2 = new XMLHttpRequest();

// //       // 🌐 Prepare the API request for the neighboring country
// //       req2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //       req2.send();

// //       // 📨 Wait for the response from the API
// //       req2.addEventListener('load', function () {
// //         const [data2] = JSON.parse(req2.responseText); // 🗄️ Parse the response data
// //         renderCountry(data2); // 🖼️ Render the neighboring country
// //         console.log(data2); // 🖥️ Log the data for debugging
// //       });
// //     }
// //   });
// // };

// // // 🚀 Fetch and display India and its neighboring country
// // getCountryAndNeighbors('Zhōngguó');
// // getCountryAndNeighbors('india');

// // const req = fetch(' `https://restcountries.com/v3.1/name/india');

// // console.log(req);

// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => {
//       console.log(res);

//       if (!res.ok) {
//         throw new Error(`Not found ${res.status} country 🤣`);
//       }

//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbors = data[0].borders[0];

//       if (!neighbors) return;
//     })
//     .catch(err => alert('Error:', err));
// };

// getCountryData('indiaaaa');

// ! We use .then and .catch to chain the async js it is better from callback.

//! use also use throw new Error to manually Error throw

//! async/await

// const whereAmI = async country => {
//   // It wil  stop code at this time until promise is  fulfilled(until data is fetch in this case)
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

//   console.log(res);

//   const data = await res.json();

//   console.log(data);
// };
// whereAmI('india');
// console.log('FIRST');

//! try-catch in JS

// try {
//   const x = 1;
//   x = 2;
//   console.log(x);
// } catch (error) {
//   console.error(error.message);
// }

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

//! Parllel Promise

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('india', 'usa', 'japan');

// //! Promise.race: recieve a array of promsie and return a promsie
// (async () => {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/india`),
//     getJSON(`https://restcountries.com/v3.1/name/australia`),
//     getJSON(`https://restcountries.com/v3.1/name/japan`),
//   ]);

//   console.log(res);
// })();


//! Create a Promise

let myPromise = new Promise((resolve, reject) => {
  let success = true; // Imagine we check something here

  if (success) {
    resolve('It worked!'); // This will happen if successful
  } else {
    reject('It failed!'); // This will happen if something goes wrong
  }
});



// Handling the promise with .then() and .catch()
myPromise
  .then(result => {
    console.log(result); // This will run if resolve() is called
  })
  .catch(error => {
    console.log(error); // This will run if reject() is called
  });