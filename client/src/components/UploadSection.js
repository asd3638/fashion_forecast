import styled from "styled-components/macro";
import InputBox from "../components/InputBox";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .quesetion {
    margin-bottom: 3rem;
  }
  & > .input-box-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

function UploadSection() {
  return (
    <>
      <Wrapper>
        <h1 class="quesetion">무엇을 입을 예정인가요?</h1>
        <div class="input-box-row">
          <InputBox title="상의" />
          <InputBox title="하의" />
        </div>
        <div class="input-box-row">
          <InputBox title="아우터" />
          <InputBox title="원피스" />
        </div>
      </Wrapper>
    </>
  );
}

export default UploadSection;
