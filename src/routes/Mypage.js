import styled from "styled-components/macro";
import { useState, useEffect } from "react";
import HeaderSection from "../components/Header";
import WeatherSection from "../components/WeatherSection";
import OutputBox from "../components/OutputBox";
import LookInfo from "../components/LookInfo";
import api from "../Api/api";
import { BG_IMAGES, RELEVANT } from "../assets/bg-images";

const Wrapper = styled.div`
  height: 100vh;
  padding: var(--horizontal-space);
  background-size: cover;
  background-position: contain;
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
        <HeaderSection isLoggedIn={idFromUrl} />
        <WeatherSection
          onLoad={(info) => info.main && info.description && showBgImage(info)}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          <LookInfo style={{ marginRight: "10px" }} idFromUrl={idFromUrl} />
          <div style={{ display: "flex" }}>
            {look.map((look) => {
              return (
                <OutputBox
                  img={`data:image/png;base64,${btoa(
                    String.fromCharCode(...new Uint8Array(look.image.data))
                  )}`}
                  date={look.title.split("_")[0]}
                  style={look.style}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Mypage;
