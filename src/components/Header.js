import React from 'react'
import api from '../Api/api'
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Header = styled.div`
    display: flex;
    & > .title {
        font-size: 25px;
        margin-right: 25px;

    }
    & > .nav__btn {
        align-self: center;
    }
    & > .nav__btn > a{
        margin-right: 10px;
    }
`;

function HeaderSection (props) {
    let loginNav;
    let loginHome;
    let logoutNav;
    let loginMypage;

    const handleLogout = async () => {
        try {
            await api({
                method: 'GET',
                url: '/auth/logout',
            })
            .then(res => {
                console.log(res.data);
                sessionStorage.removeItem('user_id');
                document.location.href = `/home`
            })
            .catch(err => console.log(err));
        } catch(err) {
            console.log(err);
        }
    }
    // 로그인 안 된 유저가 접속했을 때
    if (!props.isLoggedIn) {
        loginNav = <Link to="/login">Login</Link>
        loginHome = <Link to="/home">Home</Link>
    }
    // 로그인 된 유저가 접속했을 때
    if (props.isLoggedIn) {
        const home_link = "/home?id=" + props.isLoggedIn
        const mypage_link = "/mypage?id=" + props.isLoggedIn
        loginHome = <Link to={home_link}>Home</Link>
        logoutNav = <Link onClick={handleLogout}>Logout</Link>
        loginMypage = <Link to={mypage_link}>MyPage</Link>
    }
    return (
        <Header>
            <div className="title">Fashion Forecast</div>
            <div className="nav__btn">
                {loginHome}
                {loginMypage}
                {loginNav}
                {logoutNav}
                <span>About</span>
            </div>
        </Header>
    );
}   

export default HeaderSection;