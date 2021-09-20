import styled from "styled-components/macro";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import WeatherSection from "../components/WeatherSection";
import OutfitImage from "../components/OutfitImage";
import LookInfo from "../components/LookInfo";
import api from "../Api/api";
import { BG_IMAGES, RELEVANT } from "../assets/bg-images";

const Wrapper = styled.div`
  height: 100vh;
  padding: 4rem var(--horizontal-space);
  background-size: cover;
  background-position: contain;
`;
const OutfitImagesContainer = styled.div`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
`;

function Mypage(props) {
  //유저 fetch
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const idFromUrl = params.get("id");

  const [look, setLook] = useState([]);
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

  useEffect(() => {
    const fetchLook = async () => {
      try {
        const response = await api.get(`look/getLooks/${idFromUrl}`);
        setLook(response.data);
      } catch (e) {}
    };
    fetchLook();
    console.log(look);
  }, []);

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

        {/* 스타일 빈도 수 보여주기 */}
        <LookInfo idFromUrl={idFromUrl} />

        {/* 그간 입어온 옷들 이미지로 띄워주기 */}
        <OutfitImagesContainer>
          {look.map((look) => {
            return (
              <OutfitImage
                img={`data:image/png;base64,${btoa(
                  String.fromCharCode(...new Uint8Array(look.image.data))
                )}`}
                date={look.title.split("_")[0]}
              />
            );
          })}
        </OutfitImagesContainer>
      </Wrapper>
    </>
  );
}

export default Mypage;
