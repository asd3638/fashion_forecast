import React, { useState, useEffect } from "react";
import api from "../Api/api";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Modal from "react-modal";
import { StyledBase } from "../global-styles";

const Header = styled.div`
  display: flex;
  & > .title {
    font-size: 25px;
    margin-right: 25px;
  }
  & > .nav__btn {
    align-self: center;
  }
  & > .nav__btn > a {
    margin-right: 10px;
  }
`;
const modalStyles = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    border: "2.5px solid black",
    borderRadius: "1rem",
    textAlign: "center",
  },
};
const ImageShow = styled(StyledBase)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.size ? `${props.size}rem` : "10rem")};
  margin-bottom: 0.4rem;
  overflow: hidden;
  & .bg-img {
    position: absolute;
    width: inherit;
    height: inherit;
  }
`;

function HeaderSection(props) {
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
          document.location.href = `/home`;
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  // 로그인 안 된 유저가 접속했을 때
  if (!props.isLoggedIn) {
    loginNav = <Link to="/login">Login</Link>;
    loginHome = <Link to="/home">Home</Link>;
  }
  // 로그인 된 유저가 접속했을 때
  if (props.isLoggedIn) {
    const home_link = "/home?id=" + props.isLoggedIn;
    const mypage_link = "/mypage?id=" + props.isLoggedIn;
    loginHome = <Link to={home_link}>Home</Link>;
    logoutNav = <Link onClick={handleLogout}>Logout</Link>;
    loginMypage = <Link to={mypage_link}>MyPage</Link>;
  }
  return (
    <Header>
      <div className="title">Fashion Forecast</div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <h1 style={{ font: "revert" }}>Fashion Forecast 는!</h1>
        <br />
        <div>
          시시각각 변하는 날씨에 맞게 옷차림의 적합성을 판단해주는 서비스입니다.
          <br />
          <br />
          상의, 하의, 아우터, 원피스 4가지의 카테고리별로 본인의 옷차림을
          이미지나 웹캡을 통해 첨부하면 오늘 날씨 정보에 따라 옷차림의 적합
          여부를 판단해줍니다.
          <br />
          <br />
          <div style={{ display: "flex", marginLeft: "2rem" }}>
            <ImageShow size={12}>
              <img src={require("../assets/weather.JPG").default} alt="desc" />
            </ImageShow>
            <div style={{ marginLeft: "5rem" }}>
              <div
                style={{ textAlign: "left", WebkitTextEmphasisStyle: "open" }}
              >
                날씨정보
              </div>
              <br />
              <div style={{ textAlign: "left" }}>
                서비스를 사용하고 있는 사용자의 위치 정보를 기반으로 현재 그
                지역의 날씨로 배경색이
              </div>
            </div>
            <br />
          </div>
          <div style={{ display: "flex", marginLeft: "2rem" }}>
            <ImageShow size={12}>
              <img src={require("../assets/input.JPG").default} alt="desc" />
            </ImageShow>
            <div style={{ marginLeft: "5rem" }}>
              <div
                style={{ textAlign: "left", WebkitTextEmphasisStyle: "open" }}
              >
                이미지업로드
              </div>
              <br />
              <div style={{ textAlign: "left" }}>
                서비스를 사용하고 있는 사용자의 위치 정보를 기반으로 현재 그
                지역의 날씨를 보여줍니다.
                <br />
                날씨 정보에 일치하는 이미지를 배경 이미지로 띄워줍니다
              </div>
            </div>
            <br />
          </div>
          또한 로그인을 진행하면 옷차림 판단 뿐 아니라 옷차림을 저장하고
          마이페이지를 통해 일자별 옷차림 정보와 자주 입는 스타일을 확인할 수
          있습니다.
        </div>
      </Modal>
      <div className="nav__btn">
        {loginHome}
        {loginMypage}
        {loginNav}
        {logoutNav}
        <span onClick={openModal}>About</span>
      </div>
    </Header>
  );
}

export default HeaderSection;
