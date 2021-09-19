import styled from "styled-components/macro";
import React, { useState, useEffect } from "react";
import api from "../Api/api";

const Wrapper = styled.section`
  margin-top: 2rem;
  margin-bottom: 5.5rem;
  margin-right: 4rem;
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
        <div>{user.nickName} 님이 자주 입는 스타일</div>
        <br />
        {lookResult.map((look) => {
          return (
            <div>
              <div>{look.kind}</div>
              <div>{look.style}</div>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
}

export default LookInfo;
