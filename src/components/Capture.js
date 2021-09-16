import React, { useState } from "react";
import { Camera } from "./Camera";

function Capture({ onSelect }) {
  // const [outfitImage, setOutfitImage] = useState();

  return (
    <>
      <Camera
        onSelect={(blob) => {
          // setOutfitImage(blob);
          onSelect(new File([blob], "captured_img"));
          // onSelect(blob);
        }}
        // onClear={() => setOutfitImage(undefined)}
      ></Camera>

      {/* {outfitImage && (
        <div>
          <h2>Preview</h2>
          <img
            src={outfitImage && URL.createObjectURL(outfitImage)}
            alt="preview"
          />
        </div>
      )} */}
    </>
  );
}
export default Capture;
