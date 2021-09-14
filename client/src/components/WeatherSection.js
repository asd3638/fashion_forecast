import styled from "styled-components/macro";
import { useState, useEffect } from "react";
import axios from 'axios'

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
`;

function WeatherSection() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
        };
      function success(pos) {
        const crd = pos.coords;
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        const myKey="df125f43340b93450ebd9da8d000b7d7"
        const url=`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&appid=${myKey}`
        try {
            axios.get(url).then(response => {
              console.log(response)
              setWeather({
                "temp": Math.floor(response.data.current.temp - 273.15),
                "description": response.data.current.weather[0].description,
                "min": Math.floor(response.data.daily[0].temp.min - 273.15),
                "max": Math.floor(response.data.daily[0].temp.max - 273.15)
              });
              }
            )
            console.log(weather)
        } catch (e) {
        }
      };
      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    };
    fetchWeather();
  }, [weather]);

  return (
    <>
      <Wrapper>
        <Location>
          <i class="fas fa-map-marker-alt"></i>
          <span>문정동</span>
        </Location>
        <Weather>
          <h1 class="temperature">{weather.temp}&deg;</h1>
          <div class="more-info">
            <span>{weather.description}</span>
            <span>{weather.max}&deg; / {weather.min}&deg;</span>
          </div>
        </Weather>
      </Wrapper>
    </>
  );
}

export default WeatherSection;
