import React, { useState } from "react";
import { Camera } from "./Camera";

function Capture({ kind }) {
  // const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [outfitImage, setOutfitImage] = useState();

  function createFormData(blob) {
    const formData = new FormData();
    formData.append("file", blob);
    // TBD: axios 작업
    const obj = {
      image: formData,
      userId: "",
      kind: kind,
    };
  }
  return (
    <>
      <Camera
        onCapture={(blob) => {
          setOutfitImage(blob);
          createFormData(blob);
        }}
        onClear={() => setOutfitImage(undefined)}
      ></Camera>
      {/* TBD: outfitImage 서버에 저장하는 작업 */}
      {outfitImage && (
        <div>
          <h2>Preview</h2>
          <img
            src={outfitImage && URL.createObjectURL(outfitImage)}
            alt="camera preview"
          />
        </div>
      )}
    </>
  );
}
export default Capture;
