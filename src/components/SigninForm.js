import React, { useState } from "react";
import styled from "styled-components";
import { StyledBase } from "../global-styles";
import api from "../Api/api";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & .logo {
    font-size: 2.7rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  & .header {
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & label {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  & .btn + .btn {
    margin-top: 0.6rem;
  }
`;
const Input = styled.input`
  width: 30rem;
  padding: 0.6rem 1rem;
  border: 1px solid grey;
  border-radius: 3px;
  margin-bottom: 1.3rem;
  &#password {
    margin-bottom: 2rem;
  }
`;
const Button = styled(StyledBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.6rem 2rem;
  border-radius: 3px;
  font-size: 1.4rem;
  font-weight: 700;
`;

function SigninForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputNick, setNick] = useState("");
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleInputNick = (e) => {
    setNick(e.target.value);
  };
  const handleSignin = () => {
    api
      .post("auth/join", {
        email: inputEmail,
        password: inputPw,
        nickName: inputNick,
      })
      .then((res) => {
        if (res.data === "dup_email") {
          console.log("중복된 이메일");
        } else if (res.data === "dup_nickname") {
          console.log("중복된 닉네임");
        } else if (res.data === "success") {
          //회원가입 성공
          document.location.href = "/login";
        }
      })
      .catch();
  };
  const handleCancel = () => {
    // 다시 홈 화면으로 돌아가기
    document.location.href = "/home";
  };

  return (
    <Wrapper>
      <Form>
        <h1 className="logo">
          Fashion
          <br />
          Forecast
        </h1>
        <h2 className="header">회원가입</h2>

        <label for="email">이메일</label>
        <Input
          type="email"
          id="email"
          placeholder="Enter email"
          value={inputEmail}
          onChange={handleInputEmail}
        />

        <label for="nickname">닉네임</label>
        <Input
          type="text"
          id="nickname"
          placeholder="Enter nickname"
          value={inputNick}
          onChange={handleInputNick}
        />

        <label for="password">비밀번호</label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={inputPw}
          onChange={handleInputPw}
        />

        <Button className="btn" onClick={handleSignin} buttonStyle>
          가입하기
        </Button>
        <Button className="btn" onClick={handleCancel} buttonStyle>
          취소
        </Button>
      </Form>
    </Wrapper>
  );
}
export default SigninForm;
