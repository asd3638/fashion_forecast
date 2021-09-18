import styled from "styled-components/macro";
import { useState } from "react";
import OutLookSection from "../components/OutLookSection";
import WeatherSection from "../components/WeatherSection";
import HeaderSection from "../components/Header"
import BG_IMAGE from "../assets/milky-way-1023340_1920.jpg";


const Wrapper = styled.div`
  padding: var(--horizontal-space);
  background-size: cover;
  background-position: contain;
  color: white;
`;

function Mypage(props) {
    //유저 fetch
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const idFromUrl = params.get('id');

  return (
    <>
      <Wrapper style={{ backgroundImage: `url(${BG_IMAGE})` }}>
        <HeaderSection isLoggedIn={idFromUrl}/>
      </Wrapper>
    </>
  );
}

export default Mypage;
