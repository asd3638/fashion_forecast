import React, { useState } from "react";
import styled from "styled-components/macro";
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
    margin-bottom: 0.7rem;
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
  margin-bottom: 1.6rem;
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

function LoginForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleSigninBtn = () => {
    document.location.href = "/signin";
  };
  const handleLoginBtn = () => {
    console.log(inputEmail);
    console.log(inputPw);
    api({
      method: "post",
      url: "auth/login",
      data: {
        email: inputEmail,
        password: inputPw,
      },
    })
      .then((res) => {
        if (res.data === "fail") {
          console.log(res.data);
        } else if (res.data.email === inputEmail) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          sessionStorage.setItem("user_id", res.data.id);
          const id = res.data.id;
          document.location.href = `/home?id=${id}`;
        }
      })
      .catch();
  };

  return (
    <>
      <Wrapper>
        <Form>
          <h1 className="logo">
            Fashion
            <br />
            Forecast
          </h1>
          <h2 className="header">돌아온 것을 환영합니다 :)</h2>

          <label for="email">이메일</label>
          <Input
            type="email"
            id="email"
            placeholder="Enter email"
            value={inputEmail}
            onChange={handleInputEmail}
          />

          <label for="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={inputPw}
            onChange={handleInputPw}
          />
          <Button className="btn" onClick={handleLoginBtn} buttonStyle>
            로그인
          </Button>
          <Button className="btn" onClick={handleSigninBtn} buttonStyle>
            회원가입
          </Button>
        </Form>
      </Wrapper>
    </>
  );
}
export default LoginForm;
