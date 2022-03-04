import React, { useState, useEffect } from "react";
import API from "./api/api";
import Header from "./components/header";

function App() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [mainText, setMainText] = useState(
    "Olá seja bem vindo! Para iniciar, digite o nome de uma CisetCity acima!"
  );

  const getWeatherData = (e) => {
    e.preventDefault();
    if (cityName !== null && e.target) {
      API.get(`/weather?q=${cityName},%20br`)
        .then((res) =>
          setCity({
            name: res.data.name,
            mainTemp: res.data.main.temp,
            maxTemp: res.data.main.temp_max,
            minTemp: res.data.main.temp_min,
            feelsLike: res.data.main.feels_like,
            humid: res.data.main.humidity,
            weatherIcon: res.data.weather[0].icon,
            id: res.data.id,
            lon: res.data.coord.lon,
            lat: res.data.coord.lat,
          })
        )
        .catch((err) => {
          console.log("Ops! Ocorreu um erro" + err);
        });
    } else {
      setMainText("Digite um nome válido!");
    }
  };

  useEffect(() => {
    if (lat !== null && lon !== null) {
      API.get(
        `onecall?lat=${lat}1&lon=${lon}&exclude=hourly,current,minutely,alerts&`
      )
        .then((res) =>
          setForecast(
            res.data.daily
              .map((dia) => ({
                cidade: city.nome,
                tempMax: dia.temp.max,
                tempMin: dia.temp.min,
                tempMed: (dia.temp.max + dia.temp.min) / 2,
                iconeClima: dia.weather[0].icon,
              }))
              .slice(0, 4)
          )
        )
        .catch((err) => {
          console.log("Ops! Ocorreu um erro" + err);
        });
      setLon(city.lon);
      setLat(city.lat);
    } else {
    }
  }, [lat, lon, city]);
  console.log(city);
  return (
    <div className="App">
      <Header
        onGetData={getWeatherData}
        onInputValue={(e) => setCityName(e.target.value)}
      />
    </div>
  );
}

export default App;
