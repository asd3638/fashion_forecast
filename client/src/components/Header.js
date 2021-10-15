import React, { useState, useEffect } from "react";
import api from "../Api/api";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Modal from "react-modal";
import { StyledBase } from "../global-styles";
import weatherIMG from "../assets/weather.JPG";
import inputIMG from "../assets/input.JPG";

const Wrapper = styled.nav`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6rem;
  & > .logo {
    font-size: 2.5rem;
    font-weight: 900;
    margin-right: 4rem;
  }
  & > .nav__list {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.3rem;
  }
  & .nav__btn + .nav__btn {
    margin-top: 0.02rem;
  }
  @media screen and (min-width: 612px) {
    & > .nav__list {
      flex-direction: row;
      margin-bottom: 0.3rem;
    }
    & .nav__btn + .nav__btn {
      margin-left: 1rem;
    }
  }
`;
const aboutModalStyles = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: "80%",
    height: "80%",
    border: "2.5px solid black",
    borderRadius: "1rem",
  },
};
const ModalContentWrapper = styled.div`
  line-height: 110%;
  text-align: center;
  & .title {
    line-height: 115%;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  & .sm-title {
    font-weight: 700;
    margin-bottom: 1rem;
  }
  & .description {
    margin-bottom: 2rem;
  }
`;
const ImageShow = styled(StyledBase)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.size ? `${props.size}rem` : "10rem")};
  margin-bottom: 1rem;
  overflow: hidden;

  /* center positioning  */
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, 0%);
  & .bg-img {
    width: inherit;
    height: inherit;
  }
`;
const AboutModal = (props) => {
  const { isOpen } = props;
  return isOpen ? <Modal {...props} /> : null;
};

function Header(props) {
  let loginNav;
  let loginHome;
  let logoutNav;
  let loginMypage;

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleLogout = async () => {
    try {
      await api({
        method: "GET",
        url: "/auth/logout",
      })
        .then((res) => {
          console.log(res.data);
          sessionStorage.removeItem("user_id");
          document.location.href = `/`;
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  // 로그인 안 된 유저가 접속했을 때
  if (!props.isLoggedIn) {
    loginNav = <Link to="/login">Login</Link>;
    loginHome = <Link to="/">Home</Link>;
  }
  // 로그인 된 유저가 접속했을 때
  if (props.isLoggedIn) {
    const home_link = "/?id=" + props.isLoggedIn;
    const mypage_link = "/mypage?id=" + props.isLoggedIn;
    loginHome = <Link to={home_link}>Home</Link>;
    logoutNav = <Link onClick={handleLogout}>Logout</Link>;
    loginMypage = <Link to={mypage_link}>MyPage</Link>;
  }
  return (
    <Wrapper>
      <h1 className="logo">
        Fashion
        <br />
        Forecast
      </h1>

      <AboutModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={aboutModalStyles}
        contentLabel="About Modal"
      >
        <ModalContentWrapper>
          <h1 className="title">Fashion Forecast는!</h1>
          <h4 className="sm-title">
            오늘 나의 옷차림이 날씨에 적합한지 예측해주는 서비스입니다.
          </h4>
          <p className="description">
            오늘의 옷차림 사진을 첨부한 뒤 '결과보기' 버튼을 누르면, 해당
            옷차림이 날씨에 적합한지 4가지 카테고리(상의, 하의, 아우터,
            원피스)를 기준으로 판단합니다.
          </p>

          <div>
            <h4 className="sm-title">날씨정보</h4>
            <ImageShow size={12}>
              <img className="bg-img" src={weatherIMG} alt="weather" />
            </ImageShow>
            <p className="description">
              사용자의 위치 정보를 기반으로 실시간 날씨를 보여줍니다. 날씨에
              따라 배경 이미지도 바뀝니다.
            </p>
          </div>

          <div>
            <h4 className="sm-title">이미지 첨부</h4>
            <ImageShow size={12}>
              <img className="bg-img" src={inputIMG} alt="input" />
            </ImageShow>
            <p className="description">
              4가지 카테고리(상의, 하의, 아우터, 원피스)별로 옷차림 사진을
              불러오거나 직접 촬영하여 첨부할 수 있습니다.
            </p>
          </div>

          <div>
            <h4 className="sm-title">회원가입</h4>
            <p className="description">
              회원가입을 하면 나의 일자별 옷차림 및 내가 자주 입는 스타일까지
              보여주는 마이페이지 기능을 이용할 수 있습니다.
            </p>
          </div>
        </ModalContentWrapper>
      </AboutModal>

      <ul className="nav__list">
        <li className="nav__btn">{loginHome}</li>
        <li className="nav__btn">{loginMypage}</li>
        <li className="nav__btn">{loginNav}</li>
        <li className="nav__btn">{logoutNav}</li>
        <li className="nav__btn" onClick={openModal}>
          About
        </li>
      </ul>
    </Wrapper>
  );
}

export default Header;
