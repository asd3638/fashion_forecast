import styled from "styled-components/macro";
import { useState } from "react";
import WeatherSection from "../components/WeatherSection";
import UploadSection from "../components/UploadSection";
import { BG_IMAGES, RELEVANT } from "../assets/bg-images";
import Header from "../components/Header";
const Wrapper = styled.div`
  height: 100%;
  padding: 4rem var(--horizontal-space);
  background-size: cover;
  background-position: center;
`;

function Home(props) {
  //유저 fetch
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const idFromUrl = params.get("id");

  const [bgImage, setBgImage] = useState(null);

  function showBgImage(info) {
    const main = info.main;
    const description = info.description.replace(/\s/g, "_");
    const matchingImage = BG_IMAGES.find(
      (imgPath) => imgPath.split(/[/.]/)[3] === description
    );
    if (matchingImage) {
      setBgImage(matchingImage);
    } else {
      setBgImage(RELEVANT[main]);
    }
  }

  return (
    <>
      <Wrapper
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bgImage})`,
        }}
      >
        <Header isLoggedIn={idFromUrl} />
        <WeatherSection
          onLoad={(info) => info.main && info.description && showBgImage(info)}
        />
        <UploadSection isLoggedIn={idFromUrl} />
      </Wrapper>
    </>
  );
}

export default Home;
