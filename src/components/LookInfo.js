import styled from "styled-components/macro";
import React, { useState, useEffect } from "react";
import api from "../Api/api";

const Wrapper = styled.section`
  margin-bottom: 3rem;
  & .intro {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 3rem;
    text-align: center;
  }
  & .container {
    display: flex;
    justify-content: center;
}
  }
  & .container > .each-type-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  & .each-type-container + .each-type-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  & .container > .each-type-container > .kind-title {
    display: inline-flex;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  & .container > .each-type-container > .kind-title > .kind {
    margin-left: 1rem;
  }
  & .container > .each-type-container > .style-container {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
  }
  & .container > .each-type-container > .style-container > .style {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  @media screen and (min-width: 612px) {
    flex-direction: row;
    & .intro {
      margin-right: 2rem;
    }
  }
`;

function LookInfo({ idFromUrl }) {
  const [user, setUser] = useState({});
  const [lookResult, setLookResult] = useState([]);
  const icons = [
    <i class="fas fa-cloud"></i>,
    <i class="fas fa-snowflake"></i>,
    <i class="fas fa-bolt"></i>,
    <i class="fas fa-snowflake"></i>,
  ];
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
          {lookResult.map((look, index) => {
            return (
              <div className="each-type-container">
                <div className="kind-title">
                  {icons[index]}
                  <p className="kind">{look.kind}</p>
                </div>
                {look.style.map((value) => {
                  const style = value[0];
                  const count = value[1];
                  return (
                    <div className="style-container">
                      <p className="style">{style}</p>
                      <p>{count}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
}

export default LookInfo;
