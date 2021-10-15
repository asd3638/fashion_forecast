import styled from "styled-components/macro";
import { useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { WEATHER_API_KEY } from "../Api/api";
import axios from "axios";

const Wrapper = styled.section`
  margin-bottom: 5.5rem;
`;
const Location = styled.div`
  & > i {
    margin-right: 0.8rem;
  }
  & > .location {
    display: inline-block;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 612px) {
    display: flex;
    justify-content: center;
  }
`;
const Weather = styled.div`
  display: flex;
  justify-content: space-between;
  // 모바일버전
  & > .temperature {
    font-size: 7rem;
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
  // pc버전
  @media screen and (min-width: 612px) {
    flex-direction: column;
    align-items: center;
    & > .temperature {
      font-size: 7rem;
      margin-left: 3rem;
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

function WeatherSection({ onLoad }) {
  const [temp, setTemp] = useState(0);
  const [moreInfo, setMoreInfo] = useState({});
  const [location, setLocation] = useState("");

  useDeepCompareEffect(() => {
    onLoad(moreInfo);
    fetchWeather();
  }, [moreInfo]);

  const fetchWeather = async () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=${WEATHER_API_KEY}`;
      try {
        axios.get(url).then((response) => {
          setTemp(Math.floor(response.data.main.temp));
          setMoreInfo({
            main: response.data.weather[0].main,
            description: response.data.weather[0].description,
            temp_min: Math.floor(response.data.main.temp_min),
            temp_max: Math.floor(response.data.main.temp_max),
          });
          setLocation(response.data.name);
        });
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
          <span className="location">{location}</span>
        </Location>
        <Weather>
          <h1 className="temperature">{temp}&deg;</h1>
          <div className="more-info">
            <span>{moreInfo.description}</span>
            <span>
              {moreInfo.temp_max}&deg; / {moreInfo.temp_min}&deg;
            </span>
          </div>
        </Weather>
      </Wrapper>
    </>
  );
}

export default WeatherSection;
