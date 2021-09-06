import styled from "styled-components/macro";

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
  return (
    <>
      <Wrapper>
        <Location>
          <i class="fas fa-map-marker-alt"></i>
          <span>문정동</span>
        </Location>
        <Weather>
          <h1 class="temperature">27&deg;</h1>
          <div class="more-info">
            <span>흐림</span>
            <span>27&deg; / 19&deg;</span>
          </div>
        </Weather>
      </Wrapper>
    </>
  );
}

export default WeatherSection;
