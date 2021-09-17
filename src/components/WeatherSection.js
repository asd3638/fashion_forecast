import styled from "styled-components/macro";
import { useState, useEffect } from "react";
import { WEATHER_API_KEY } from "../Api/api";
import axios from "axios";

const Wrapper = styled.section`
  margin-bottom: 5.5rem;
`;
const Location = styled.div`
  & > i {
    margin-right: 1rem;
  }
  & > span {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 612px) {
    display: flex;
    justify-content: center;
  }
`;
const Weather = styled.div`
  display: flex;
  justify-content: space-between;
  & > .temperature {
    font-size: 9rem;
    font-weight: 700;
  }
  & > .more-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    & > span {
      margin-bottom: 0.6rem;
    }
  }
  @media screen and (min-width: 612px) {
    flex-direction: column;
    align-items: center;
    & > .temperature {
      font-size: 12rem;
      margin-left: 5rem;
    }
    & > .more-info {
      justify-content: center;
      align-items: center;
      & > span {
        font-size: 1.8rem;
      }
    }
  }
`;

function WeatherSection() {
  const [weather, setWeather] = useState({});

  useEffect(() => fetchWeather(), []);

  const fetchWeather = async () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      // console.log(pos);
      // console.log("Your current position is:");
      // console.log("Latitude : " + crd.latitude);
      // console.log("Longitude: " + crd.longitude);
      // console.log("More or less " + crd.accuracy + " meters.");
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${WEATHER_API_KEY}`;
      try {
        axios.get(url).then((response) => {
          console.log("response");
          console.log(response);
          setWeather({
            temp: Math.floor(response.data.main.temp - 273.15),
            description: response.data.weather[0].description,
            min: Math.floor(response.data.main.temp_min - 273.15),
            max: Math.floor(response.data.main.temp_max - 273.15),
            location: response.data.name,
          });
        });
        console.log("weather");
        console.log(weather);
      } catch (e) {}
    }
    function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <>
      <Wrapper>
        <Location>
          <i className="fas fa-map-marker-alt"></i>
          <span>{weather.location}</span>
        </Location>
        <Weather>
          <h1 className="temperature">{weather.temp}&deg;</h1>
          <div className="more-info">
            <span>{weather.description}</span>
            <span>
              {weather.max}&deg; / {weather.min}&deg;
            </span>
          </div>
        </Weather>
      </Wrapper>
    </>
  );
}

export default WeatherSection;
