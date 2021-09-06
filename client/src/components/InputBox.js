import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  & + & {
    margin-left: 1rem;
  }
`;
const ImageShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
  border-radius: 15%;
  background-color: black;
  margin-bottom: 0.4rem;
`;
const UploadBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
`;

function InputBox({ title }) {
  return (
    <>
      <Wrapper>
        <ImageShow>
          <UploadBtn>
            <i class="fas fa-plus"></i>
          </UploadBtn>
        </ImageShow>
        <span>{title}</span>
      </Wrapper>
    </>
  );
}

export default InputBox;
