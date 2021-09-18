import styled from "styled-components/macro";
import { useState } from "react";
import WeatherSection from "../components/WeatherSection";
import UploadSection from "../components/UploadSection";
import { BG_IMAGES, RELEVANT } from "../assets/bg-images";
import HeaderSection from "../components/Header";
const Wrapper = styled.div`
  height: 100%;
  padding: var(--horizontal-space);
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
    // 테스트용(description과 일치하는 이미지가 없는 경우 main으로 잘 떨어지는지)
    // const main = "Mist";
    // const description = "";
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
        <HeaderSection isLoggedIn={idFromUrl} />
        <WeatherSection
          onLoad={(info) => info.main && info.description && showBgImage(info)}
        />
        <UploadSection isLoggedIn={idFromUrl} />
      </Wrapper>
    </>
  );
}

export default Home;
