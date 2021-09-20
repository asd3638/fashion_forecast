import styled from "styled-components/macro";
import React, { useState, useEffect } from "react";
import api from "../Api/api";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  & .intro {
    margin-bottom: 2rem;
  }
  & .container {
    display: flex;
  }
  & .container > .each-type-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .each-type-container + .each-type-container {
    margin-left: 1rem;
  }
  & .container > .each-type-container > .kind {
    font-size: 1rem;
    font-weight: 900;
  }
  & .container > .each-type-container > .style {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 612px) {
    flex-direction: row;
    & .intro {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`;

function LookInfo({ idFromUrl }) {
  const [user, setUser] = useState({});
  const [lookResult, setLookResult] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/user/${idFromUrl}`);
        setUser(response.data);
        console.log(user);
      } catch (e) {}
    };
    const fetchlookResult = async () => {
      try {
        const response = await api.get(`look/getStyles/${idFromUrl}`);
        setLookResult(response.data);
        console.log(response.data);
      } catch (e) {}
    };
    fetchlookResult();
    fetchUser();
  }, []);

  return (
    <>
      <Wrapper>
        <h1 className="intro">{user.nickName} 님이 자주 입는 스타일</h1>
        <div className="container">
          {lookResult.map((look) => {
            return (
              <div className="each-type-container">
                <p className="kind">{look.kind}</p>
                <p className="style">{look.style}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
}

export default LookInfo;
