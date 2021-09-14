import styled from "styled-components/macro";
const dummyOutfits = ["긴팔 니트웨어", "7부 데님", "긴팔 무스탕"];

const Wrapper = styled.section`
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
`;

function ResultSection() {
  return (
    <>
      <Wrapper>
        <p class="outfit-prediction">
          {`${dummyOutfits.join(",\n")}을(를) 입으셨군요?`}
        </p>
        <div class="result">
          <p>
            지금 옷차림은 날씨에...
            <br />
            <span>적합</span>합니다.
            <br />
            좋은 하루 보내세요!
          </p>
        </div>
      </Wrapper>
    </>
  );
}

export default ResultSection;
