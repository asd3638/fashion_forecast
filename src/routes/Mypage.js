import styled from "styled-components/macro";
import { useState, useEffect } from "react";
//import OutLookSection from "../components/OutLookSection";
import HeaderSection from "../components/Header"
import Chart from "../components/Chart"
import api from "../Api/api"
import BG_IMAGE from "../assets/milky-way-1023340_1920.jpg";


const Wrapper = styled.div`
  padding: var(--horizontal-space);
  background-size: cover;
  background-position: contain;
  color: white;
  height: 80px;

`;

function Mypage(props) {
  //유저 fetch
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const idFromUrl = params.get('id');
  const [look, setLook] = useState({});

  const data = [
    {
      id: "드레스",
      label: "드레스",
      value: 120
    },
    {
      id: "블라우스",
      label: "블라우스",
      value: 35
    }
  ];


  useEffect(() => {
    const fetchLook = async () => {
      try {
          const response = await api.get(
          `/look/${idFromUrl}`
          );
          for (let i of response.data) {
            
          }
      } catch (e) {
      }
    };
    fetchLook();
  }, []);

  return (
    <>
      <Wrapper style={{ backgroundImage: `url(${BG_IMAGE})` }}>
        <HeaderSection isLoggedIn={idFromUrl}/>
      </Wrapper>
      <Chart data={data}/>
    </>
  );
}

export default Mypage;
