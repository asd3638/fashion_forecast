import styled from "styled-components/macro";
import { StyledBase } from "../global-styles";
import InputBox from "../components/InputBox";
import React, { useState, useEffect } from "react";
import api from "../Api/api";
import axios from 'axios'

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
const ResultContainer = styled.section`
  white-space: pre;
  & .outfit-prediction {
    line-height: 110%;
    margin-bottom: 3rem;
  }
  & .result {
    & > p {
      line-height: 200%;
    }
    & > p > span {
      margin-top: 1rem;
      font-size: 3rem;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 612px) {
    display: flex;
    flex-direction: column;
    padding: 0 12rem;
  }
`;

function UploadSection() {
  const formData = new FormData();
  const [clothesResult, setClothesResult] = useState([]);
  const [weather, setWeather] = useState({});
  const [judge, setJudge] = useState("");
  const [recommend, setRecommend] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      function success(pos) {
        const crd = pos.coords;
        console.log(pos);
        console.log("Your current position is:");
        console.log("Latitude : " + crd.latitude);
        console.log("Longitude: " + crd.longitude);
        console.log("More or less " + crd.accuracy + " meters.");
        const myKey = "df125f43340b93450ebd9da8d000b7d7";
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${myKey}`;
        try {
          axios.get(url).then((response) => {
            console.log(response);
            setWeather({
              temp: Math.floor(response.data.main.temp - 273.15),
              description: response.data.weather[0].description,
              min: Math.floor(response.data.main.temp_min - 273.15),
              max: Math.floor(response.data.main.temp_max - 273.15),
              location: response.data.name,
            });
          });
          console.log(weather);
        } catch (e) {}
      }
      function error(err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
      }
      navigator.geolocation.getCurrentPosition(success, error, options);
    };
    fetchWeather();
  }, []);
  
  function top(temperature, top){
    if (top === undefined) {
      return 1
    }
    const cate = top[0];
    const len = top[1];
    if (temperature >= 28) {
      if ((cate === '티셔츠' || cate === '브라탑' || cate === '셔츠') && (len === '민소매' || len === '반팔' || len === '캡')) {
        return 1;
      }
      else {
        return 0;
      }
    }
    else if (temperature >= 23){
      if( (cate === '티셔츠' || cate === '셔츠') && (len === '반팔' || len ==='7부소매'|| len === '없음')){
        return 1;
      }
      else {
        return 0;
      }
    }
    else if ( temperature >=20){
      if( (cate ==='블라우스' || cate === '티셔츠' || cate === '셔츠') && (len ==='긴팔' ||len === '없음')){
        return 1;
      }
      else {
        return 0;
      }
    }
    else{ //기온 20도보다 낮을경우
      if ((cate ==='니트웨어' || cate ==='블라우스' || cate === '티셔츠' || cate === '셔츠' || cate ==='후드티') && (len ==='긴팔' ||len === '없음')){
        return 1;
      }
      else {
        return 0;
      }
    }
  }

  function outer(temperature, outer){
    if (outer === undefined) {
      return 1
    }
    const cate = outer[0];
    const len = outer[1];

    if (temperature >= 23) {
      if (cate === null && len === null) {
        return 1;
      }
      else {
        return 0;
      }
    }
    else if (temperature >= 23){
      if(len==='민소매' || len==='반팔' || len==='캡'){
        return 1;
      }
      else {
        return 0;
      }
    }
    else if ( temperature >=17){
      if(cate==='가디건' && (len==='긴팔' || len==='7부소매')){
        return 1;
      }
      else {
        return 0;
      }
    }
    else if ( temperature >=12){
      if((cate==='가디건' || cate==='베스트' || cate==='재킷' || cate==='점퍼'|| cate==='짚업') && len==='긴팔'){
        return 1;
      }
      else {
        return 0;
      }
    }
    else{ //기온 12도보다 낮을경우
      if((cate==='가디건' || cate==='코트' || cate==='재킷' || cate==='점퍼' || cate==='짚업') && len==='긴팔'){
        return 1;
      }
      else {
        return 0;
      }
    }
  }

  function bottom(temperature, bottom){
    if (bottom === undefined) {
      return 1
    }
    const cate = bottom[0]
    const len = bottom[1]

    if (temperature >= 28) {
      if ((cate ==='스커트' ||  cate ==='팬츠') && (len === '미니' || len==='미디')) {
        return 1;
      }
      else {
        return 0;
      }
    }
    else if (temperature >= 23){
      if((cate ==='스커트' || cate ==='팬츠') && (len==='니렝스' || len==='미디' || len==='발목')){
        return 1;
      }
      else {
        return 0;
      }
    }
    else if ( temperature >=12){
      if((cate==='스커트' || cate==='조거팬츠' || cate==='청바지' || cate==='팬츠') && (len==='발목' || len==='맥시')){
        return 1;
      }
      else {
        return 0;
      }
    }
    else if ( temperature >= 5){
      if((cate==='조거팬츠' || cate==='청바지' || cate==='팬츠') && (len==='발목' || len==='맥시')){
        return 1;
      }
      else {
        return 0;
      }
    }
    else{ //기온 5도보다 낮을경우
      if((cate==='조거팬츠' || cate==='청바지' || cate==='팬츠') && len==='맥시'){
        return 1;
      }
      else {
        return 0;
      }
    }
  }

  function op(temperature, op){
    if (op === undefined) {
      return 1
    }
    const cate = op[0]
    const t_len = op[1]
    const b_len = op[2]

    if (temperature >= 28) {
      if ((cate === '드레스' || cate ==='점프수트') && (t_len === '민소매' || t_len === '반팔' || t_len === '캡' && b_len === '미니')) {
        return 1;
      }
      else {
        return 0;
      }
    }
    else if (temperature >= 23){
      if( (cate === '드레스' || cate ==='점프수트') && (t_len === '반팔' || t_len ==='7부소매'|| t_len === '없음' && b_len==='니렝스' || b_len==='미디' || b_len==='발목')){
        return 1;
      }
      else {
        return 0;
      }
    }
    else if ( temperature >=20){
      if( (cate === '드레스' || cate ==='점프수트') && (t_len ==='긴팔' ||t_len === '없음' && b_len==='니렝스' || b_len==='미디' || b_len==='발목')){
        return 1;
      }
      else {
        return 0;
      }
    }
    else{ //기온 20도보다 낮을경우
      if ((cate === '드레스' || cate ==='점프수트') && (t_len ==='긴팔' || t_len === '없음' && b_len==='발목' || b_len ==='맥시')){
        return 1;
      }
      else {
        return 0;
      }
    }
  }

  function result_str(temperature, weather){
    let str;

    if(temperature >= 28){
      str = '민소매에 반바지나 얇은 원피스';
    }
    else if(temperature >= 23){
      str =  '반팔, 얇은 셔츠, 긴팔에 반바지';
    }
    else if(temperature >= 20){
      str =  '긴팔, 가디건, 후드티에 긴바지';
    }
    else if(temperature >= 17){
      str =  '니트, 가디건, 후드티, 맨투맨에 청바지나 긴바지';
    }
    else if(temperature >= 12){
      str =  '셔츠와 자켓이나 가디건에 긴바지 ';
    }
    else if(temperature >= 10){
      str =  '긴팔 긴바지에 코트, 겉옷 여러겹';
    }
    else {
      str =  '긴팔 긴바지에 코트, 두꺼운 겉옷';
    }

    if(weather === 'shower rain' || weather==='rain' || weather==='thunderstorm' || weather==='snow'){
      str = str + ' + 우산'
    }

    return str;
  }

  function checkClothes(clothesResult){
    const top_01 = top(weather.temp, clothesResult.top);
    const outer_01 = outer(weather.temp, clothesResult.outer);
    const bottom_01 = bottom(weather.temp, clothesResult.bottom);
    const op_01 = op(weather.temp, clothesResult.op);
    const recommendClothes = result_str(weather.temp, weather.description);
    let judge;

    if (top_01 && outer_01 && bottom_01 && op_01 === 1){
      judge = '적합';
    }
    else{
      judge = '부적합';
    }
    setJudge(judge);
    if (judge === '부적합') {
      setRecommend(recommendClothes)
    }
  }
  
  const handleUpload = (img, kind) => {
    console.log(kind)
    if (kind === "top") {
      formData.append("top", img);
    }
    if (kind === "bottom") {
      formData.append("bottom", img);
    }
    if (kind === "outer") {
      formData.append("outer", img);
    }
    if (kind === "op") {
      formData.append("op", img);
    }
    console.log(formData)
  };
  const onSubmitHandler = async (e) => {
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };
    e.preventDefault();
    api
      .post("/upload/post/1", formData, config)
      .then((res) => {
        // 서버 작업 성공하면
        if (res.status === 200) {
          setClothesResult(res.data)
          checkClothes(res.data)
        }
      })
      .catch();
  };

  let result_top;
  let result_bottom;
  let result_outer;
  let result_op;

  if (clothesResult.length !== 0) {
    if (clothesResult.top) {
      result_top = <p class="outfit-prediction">{`상의 ${clothesResult.top}을(를) 입으셨군요?`}</p>
    }
    if (clothesResult.bottom) {
      result_bottom = <p class="outfit-prediction">{`하의 ${clothesResult.bottom}을(를) 입으셨군요?`}</p>
    }
    if (clothesResult.outer) {
      result_outer = <p class="outfit-prediction">{`아우터 ${clothesResult.outer}을(를) 입으셨군요?`}</p>
    }
    if (clothesResult.op) {
      result_op = <p class="outfit-prediction">{`원피스 ${clothesResult.op}을(를) 입으셨군요?`}</p>
    }
  }
  

  return (
    <>
      <Wrapper>
        <h1 class="quesetion">무엇을 입을 예정인가요?</h1>
        <div class="input-box-group">
          <div class="input-box-row">
            <InputBox kind="top" handleUpload={handleUpload} />
            <InputBox kind="bottom" handleUpload={handleUpload} />
          </div>
          <div class="input-box-row">
            <InputBox kind="outer" handleUpload={handleUpload} />
            <InputBox kind="op" handleUpload={handleUpload} />
          </div>
        </div>
        <SeeResultBtn buttonStyle onClick={onSubmitHandler}>
          결과 보기
        </SeeResultBtn>
      </Wrapper>

      <ResultContainer>
        
        <div class="result">
          {result_top}
          {result_bottom}
          {result_outer}
          {result_op}
          <p>
            지금 옷차림은 날씨에
            <span>{judge}</span>합니다.
            <br />
            {recommend}
            <br />
            좋은 하루 보내세요!
          </p>
        </div>
      </ResultContainer>
    </>
  );
}

export default UploadSection;
