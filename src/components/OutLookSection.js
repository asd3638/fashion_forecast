import styled from "styled-components/macro";
import { StyledBase } from "../global-styles";
import InputBox from "../components/InputBox";
import React, { useState, useEffect } from "react";
import api, { WEATHER_API_KEY } from "../Api/api";
import axios from "axios";
import Loader from "./Loader"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  & > .quesetion {
    margin-bottom: 3rem;
  }
  & > .input-box-group {
    margin-bottom: 1.7rem;
    & > .input-box-row {
      display: flex;
      margin-bottom: 1rem;
    }
  }
  @media screen and (min-width: 612px) {
    & > .input-box-group {
      display: flex;
      & > .input-box-row + .input-box-row {
        margin-left: 1rem;
      }
    }
  }
`;
const SeeResultBtn = styled(StyledBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  height: 4.5rem;
`;
// const UndoBtn = styled(StyledBase)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 10rem;
//   height: 4.5rem;
// `;
const ResultContainer = styled.section`
  & .result {
    text-align: center;
    & .predictions {
      height: 100px;
      margin-bottom: 3rem;
    }
    & p {
      line-height: 200%;
    }
    & > .recommendations > span { //강조
      margin-top: 1rem;
      font-size: 3rem;
      font-weight: 700;
    }
  }
`;

function OutLookSection(props) {
  const [user, setUser] = useState({});
  const [look, setLook] = useState({});


  useEffect(() => {
    const fetchUser = async () => {
      try {
          const response = await api.get(
          `/user/${props.isLoggedIn}`
          );
          setUser(response.data);
          console.log(user);
      } catch (e) {
      }
    };
    const fetchLook = async () => {
      try {
          const response = await api.get(
          `/user/${props.isLoggedIn}`
          );
          setUser(response.data);
          console.log(user);
      } catch (e) {
      }
    };
    fetchUser();
    fetchLook();
  }, []);

  return (
    <>
      <Wrapper>
        <h1 className="quesetion">오늘은 무엇을 입을 예정인가요?</h1>
        <div className="input-box-group">
          <div className="input-box-row">
          </div>
          <div className="input-box-row">
          </div>
        </div>
        <div style={{display: "flex"}}>
        </div>
      </Wrapper>
    </>
  );
}

export default OutLookSection;
