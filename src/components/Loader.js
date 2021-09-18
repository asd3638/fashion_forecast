import React from "react";
import styled from "styled-components/macro";
import ReactLoading from "react-loading";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
`;

function Loader({ type, color, message }) {
  return (
    <Wrapper>
      <h2>이미지 처리중입니다</h2>
      <h2>창을 닫지 말아주세요</h2>
      <ReactLoading
        type={type}
        color={color}
        style={{
          width: "64px",
          height: "64px",
        }}
      />
    </Wrapper>
  );
}

export default Loader;
