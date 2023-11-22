const API = "https://restcountries.com/v3.1/all";

async function fetchData() {
  try {
    const response = await fetch(API);
    const data = await response.json();

    data.forEach((value) => {
      const countryData = {
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        population: value.population,
        latitude: value.latlng[0],
        longitude: value.latlng[1],
      };

      createCountry(countryData);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function createCountry({ name, flag, code, capital, region, population, latitude, longitude }) {
  const container = document.createElement("div");
  container.classList.add("container");

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'s Flag image">
    <div class="card-body car">
      <p><span>Population :</span>${population}</p>
      <p><span>Captial :</span> ${capital}</p>
      <p><span>Region :</span> ${region}</p>
      <p><span>Country Code :</span>${code}</p>
      <a href="#" class="btn btn-primary" onclick="getBlock(${latitude},${longitude},'${name}')">Click for Weather</a>
      <div id="${name}"></div>
    </div>
  `;

  container.appendChild(card);
  document.body.appendChild(container);
}

async function getBlock(lat, lng, name) {
  const WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c807e057c4f0f628ab827e822bd19d5e`;

  try {
    const response = await fetch(WAPI);
    const data = await response.json();

    alert(`
      For ${name}
      Current Humidity is ${data.main.humidity}
      Current Pressure is ${data.main.pressure}
      Current Temperature is ${data.main.temp}
    `);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

document.addEventListener("click", (event) => event.preventDefault());
fetchData();
