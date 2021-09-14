import styled from "styled-components/macro";
import WeatherSection from "../components/WeatherSection";
import UploadSection from "../components/UploadSection";
import ResultSection from "../components/ResultSection";

const Wrapper = styled.div`
  padding: var(--horizontal-space);
`;

function Home() {
  return (
    <>
      <Wrapper>
        <WeatherSection />
        <UploadSection />
        <ResultSection />
      </Wrapper>
    </>
  );
}

export default Home;
