import styled from "styled-components/macro";
import React from "react";
import { StyledBase } from "../global-styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  & + & {
    margin-left: 1rem;
  }
  & .input-title {
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
  }
`;
const ImageBox = styled(StyledBase)`
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

function OutfitImage({ img, date }) {
  return (
    <>
      <Wrapper>
        <ImageBox size={15}>
          <img className="bg-img" src={img} alt="preview" />
        </ImageBox>
        <span className="input-title">{date}</span>
      </Wrapper>
    </>
  );
}

export default OutfitImage;
