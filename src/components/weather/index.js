import {
  Card,
  CardForecast,
  DivTemps,
  DivWeather,
} from "../shared/wrappers/Card";
import { CityName } from "./UI/CityName";
import { Container } from "../shared/wrappers/Container";
import { Temp } from "./UI/Temp";
import { MainTemp } from "./UI/MainTemp";
import { FeelsLike } from "./UI/FeelsLike";
import { ForecastButton } from "../shared/actions/Button";

export const WatherData = ({ onCity, onForecast, onDisplayForecast }) => {
  return (
    <div>
      <Container>
        <Card key={onCity.id}>
          <CityName>{onCity.name}</CityName>
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <p style={{ fontSize: "24px", margin: "0px" }}>Clima atual</p>
              <DivWeather>
                <MainTemp> {Math.round(onCity.mainTemp)}ºC</MainTemp>
                <img
                  alt="icon-temp"
                  src={`https://openweathermap.org/img/wn/${onCity.weatherIcon}@2x.png`}
                />
              </DivWeather>
            </div>
            <div>
              <FeelsLike> Sensação: {Math.round(onCity.feelsLike)}ºC</FeelsLike>
              <DivTemps>
                <Temp>Min {Math.round(onCity.minTemp)}ºC</Temp>
                <Temp>Max {Math.round(onCity.maxTemp)}ºC</Temp>
              </DivTemps>
              <h3 style={{ margin: "0" }}>Umidade: {onCity.humid}% 💧</h3>
            </div>
          </div>
        </Card>
      </Container>
      <Container>
        {onForecast.length !== 0 ? (
          onForecast.map((nextDays) => {
            return (
              <CardForecast>
                <CityName>{nextDays.city}</CityName>
                <p style={{ fontSize: "24px", margin: "0px" }}>
                  Previsão do Clima
                </p>
                <DivWeather>
                  <MainTemp>{Math.round(nextDays.avgTemp)}ºC</MainTemp>
                  <img
                    alt="icon-temp"
                    src={`https://openweathermap.org/img/wn/${nextDays.weatherIcon}@2x.png`}
                  />
                </DivWeather>
                <DivTemps>
                  <Temp>Min {Math.round(nextDays.minTemp)}ºC</Temp>
                  <Temp>Max {Math.round(nextDays.maxTemp)}ºC</Temp>
                </DivTemps>
              </CardForecast>
            );
          })
        ) : (
          <ForecastButton onClick={onDisplayForecast}>
            Previsao do Tempo
          </ForecastButton>
        )}
      </Container>
    </div>
  );
};
