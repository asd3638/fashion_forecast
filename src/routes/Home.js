import styled from "styled-components/macro";
import WeatherSection from "../components/WeatherSection";
import UploadSection from "../components/UploadSection";
import cloud from "../assets/broken-clouds.jpg";

const Wrapper = styled.div`
  padding: var(--horizontal-space);
  background-image: url(${cloud});
  background-size: cover;
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
