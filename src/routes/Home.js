import styled from "styled-components/macro";
import WeatherSection from "../components/WeatherSection";
import UploadSection from "../components/UploadSection";

const Wrapper = styled.div`
  padding: var(--horizontal-space);
`;

function Home() {
  return (
    <>
      <Wrapper>
        <WeatherSection />
        <UploadSection />
      </Wrapper>
    </>
  );
}

export default Home;
