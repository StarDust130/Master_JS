'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountry = (country) => {
  const req = new XMLHttpRequest();

  req.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  req.send();

  req.addEventListener('load', () => {
    const [data] = JSON.parse(req.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" alt="${
      data.name.common
    } Flag" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common} (${
      data.altSpellings[1]
    })</h3>
        <h4 class="country__region">${data.region} - ${data.subregion}</h4>
        <p class="country__row"><span>🏛️</span>Capital: ${data.capital[0]}</p>
        <p class="country__row"><span>🗺️</span>Area: ${(
          data.area / 1_000_000
        ).toFixed(2)} million km²</p>
        <p class="country__row"><span>👫</span>Population: ${(
          +data.population / 1_000_000
        ).toFixed(2)} million</p>
        <p class="country__row"><span>🗣️</span>Languages: ${Object.values(
          data.languages
        ).join(', ')}</p>
        <p class="country__row"><span>💰</span>Currency: ${
          Object.values(data.currencies)[0].name
        } (${Object.keys(data.currencies)[0]})</p>
        <p class="country__row"><span>⌚</span>Timezones: ${data.timezones.join(
          ', '
        )}</p>
        <p class="country__row"><span>🌍</span>Native Name: ${
          data.name.nativeName[Object.keys(data.name.nativeName)[0]].common
        }</p>
        <p class="country__row"><span>🏞️</span>Borders: ${
          data.borders ? data.borders.join(', ') : 'None'
        }</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}

getCountry("india")
getCountry("usa")
getCountry("japan")
getCountry('russia');