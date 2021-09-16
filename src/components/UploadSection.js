import styled from "styled-components/macro";
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
`;
const SeeResultBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 4rem;
  border: 1px solid black;
  border-radius: 0.7rem;
  background-color: white;
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
      .post("/upload/post", formData, config)
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
        <SeeResultBtn onClick={onSubmitHandler}>결과 보기</SeeResultBtn>
      </Wrapper>
    </>
  );
}

export default UploadSection;
