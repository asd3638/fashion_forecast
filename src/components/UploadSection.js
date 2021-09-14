import styled from "styled-components/macro";
import InputBox from "../components/InputBox";

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
  return (
    <>
      <Wrapper>
        <h1 class="quesetion">무엇을 입을 예정인가요?</h1>
        <div class="input-box-group">
          <div class="input-box-row">
            <InputBox title="상의" kind="top" />
            <InputBox title="하의" kind="bottom" />
          </div>
          <div class="input-box-row">
            <InputBox title="아우터" kind="outer" />
            <InputBox title="원피스" kind="op" />
          </div>
        </div>
        <SeeResultBtn>결과 보기</SeeResultBtn>
      </Wrapper>
    </>
  );
}

export default UploadSection;
