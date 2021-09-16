import React from "react";
import { Camera } from "./Camera";

function Capture({ onSelect }) {
  return (
    <>
      <Camera
        onSelect={(blob) => {
          onSelect(new File([blob], "captured_img"));
        }}
      ></Camera>
    </>
  );
}
export default Capture;
