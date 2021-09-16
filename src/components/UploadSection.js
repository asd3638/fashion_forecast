import styled from "styled-components/macro";
import { StyledBase } from "../global-styles";
import InputBox from "../components/InputBox";
import React, { useState, useEffect } from "react";
import api from "../Api/api";

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

function UploadSection() {
  const formData = new FormData();

  const handleUpload = (img, kind) => {
    if (kind === "top") {
      formData.append("top", img)
    }
    if (kind === "bottom") {
      formData.append("bottom", img)
    }
    if (kind === "outer") {
      formData.append("outer", img)
    }
    if (kind === "op") {
      formData.append("op", img)
    }
  }

  const onSubmitHandler = (e) => {
    const config = {
      header: {
        'Content-Type':'multipart/form-data'
      }
    }
    e.preventDefault();
    api
      .post("/upload/post/1", formData, config)
      .then((res) => {
        // 서버 작업 성공하면
        if (res.status  === 200) {
          console.log(res.data)
        }
      })
      .catch();
  };

  return (
    <>
      <Wrapper>
        <h1 class="quesetion">무엇을 입을 예정인가요?</h1>
        <div class="input-box-group">
          <div class="input-box-row">
            <InputBox title="상의" kind="top" handleUpload={handleUpload}/>
            <InputBox title="하의" kind="bottom" handleUpload={handleUpload}/>
          </div>
          <div class="input-box-row">
            <InputBox title="아우터" kind="outer" handleUpload={handleUpload}/>
            <InputBox title="원피스" kind="op" handleUpload={handleUpload}/>
          </div>
        </div>
        <SeeResultBtn buttonStyle onClick={onSubmitHandler}>결과 보기</SeeResultBtn>
      </Wrapper>
    </>
  );
}

export default UploadSection;
