import styled from "styled-components/macro";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & + & {
    margin-left: 1rem;
  }
  & .input-title {
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
  }
`;
const ImageShow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
  border-radius: 15%;
  background-color: black;
  margin-bottom: 0.4rem;
  & .bg-img {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
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
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function InputBox({ title, kind }) {
  const imageInputRef = useRef();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState();

  function onImageInput(e) {
    let reader = new FileReader();
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);
    // console.log(formData);
    // for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
    const obj = {
      image: formData,
      userId: "",
      kind: kind,
    };
    // 이미지 미리보기
    reader.onloadend = () => {
      setPreview({
        file: img,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(img);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function onImageInputBtnClick(e) {
    e.preventDefault();
    imageInputRef.current.click();
    closeModal();
  }
  return (
    <>
      <input
        ref={imageInputRef}
        style={{ display: "none" }}
        type="file"
        accept="image/jpg,impge/png,image/jpeg,"
        name="image"
        onChange={onImageInput}
      />
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>둘 중에서 선택하세요</h1>
        <button onClick={onImageInputBtnClick}>디바이스에서 찾기</button>
        <Link to="/capture">
          <button>사진 찍기</button>
        </Link>
      </Modal>

      <Wrapper>
        <ImageShow onClick={openModal}>
          {preview ? (
            <img class="bg-img" src={preview.previewURL} alt="preview" />
          ) : (
            ""
          )}
          <UploadBtn>
            <i class="fas fa-plus"></i>
          </UploadBtn>
        </ImageShow>
        <span class="input-title">{title}</span>
      </Wrapper>
    </>
  );
}

export default InputBox;
