import styled from "styled-components/macro";
import React from "react";
import { StyledBase } from "../global-styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & + & {
    margin-left: 1rem;
  }
  & .input-title {
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
  }
`;
const ImageShow = styled(StyledBase)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.size ? `${props.size}rem` : "12rem")};
  height: ${(props) => (props.size ? `${props.size}rem` : "12rem")};
  margin-bottom: 0.4rem;
  overflow: hidden;
  & .bg-img {
    position: absolute;
    width: inherit;
    height: inherit;
  }
`;

function OutputBox({ img, date }) {
  return (
    <>
      <Wrapper>
        <ImageShow size={20}>
          <img className="bg-img" src={img} alt="preview" />
        </ImageShow>
        <span className="input-title" style={{ marginTop: "5px" }}>
          {date}
        </span>
      </Wrapper>
    </>
  );
}

export default OutputBox;
