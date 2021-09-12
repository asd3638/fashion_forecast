import React, { useState } from "react";
import { Camera } from "../components/Camera";

function Capture() {
  // const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <>
      <Camera
        onCapture={(blob) => setCardImage(blob)}
        onClear={() => setCardImage(undefined)}
      ></Camera>
      {/* TBD: cardImage 서버에 저장하는 작업 */}
      {cardImage && (
        <div>
          <h2>Preview</h2>
          <img
            src={cardImage && URL.createObjectURL(cardImage)}
            alt="camera preview"
          />
        </div>
      )}
    </>
  );
}
export default Capture;
