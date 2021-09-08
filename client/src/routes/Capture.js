import React, { useState } from "react";
import { Camera } from "../components/Camera";

function Capture() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <>
      {isCameraOpen && (
        <Camera
          onCapture={(blob) => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      )}
      {cardImage && (
        <div>
          <h2>Preview</h2>
          <img
            src={cardImage && URL.createObjectURL(cardImage)}
            alt="camera preview"
          />
        </div>
      )}

      <div>
        <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
        <button
          onClick={() => {
            setIsCameraOpen(false);
            setCardImage(undefined);
          }}
        >
          Close Camera
        </button>
      </div>
    </>
  );
}
export default Capture;
