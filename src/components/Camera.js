import styled, { keyframes, css } from "styled-components";
import { StyledBase } from "../global-styles";
import { useState, useRef } from "react";
import Measure from "react-measure";
import { useUserMedia } from "../hooks/use-user-media";
import { useCardRatio } from "../hooks/use-card-ratio";
import { useOffsets } from "../hooks/use-offsets";
// //////////////////////////////////////////
const flashAnimation = keyframes`
  from {
    opacity: 0.75;
  }
  to {
    opacity: 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
  overflow: hidden;
`;
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const Video = styled.video`
  position: absolute;

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }
`;
export const Flash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  opacity: 0;

  ${({ flash }) => {
    if (flash) {
      return css`
        animation: ${flashAnimation} 300ms ease-out;
      `;
    }
  }}
`;
export const Button = styled(StyledBase)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 5%;
  min-width: 50px;
  min-height: 50px;
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 1rem;
`;
const SaveButton = styled(Button)`
  left: 2rem;
`;
// /////////////////////////////////////////////

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};

export function Camera({ onCapture, onClear }) {
  const canvasRef = useRef();
  const videoRef = useRef();

  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  );

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleResize(contentRect) {
    console.log(contentRect);
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
      // width: document.documentElement.clientWidth,
      // height: document.documentElement.clientHeight,
    });
  }

  function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleCapture() {
    const context = canvasRef.current.getContext("2d");

    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height
    );

    // canvasRef.current.toBlob((blob) => onCapture(blob), "image/jpeg", 1);
    setIsCanvasEmpty(false);
    setIsFlashing(true);
  }

  function handleClear() {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsCanvasEmpty(true);
    onClear();
  }

  function handleSave() {
    // TBD
    alert("saved");
    canvasRef.current.toBlob((blob) => onCapture(blob), "image/jpeg", 1);
  }

  if (!mediaStream) {
    return null;
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper>
          <Container
            ref={measureRef}
            maxHeight={videoRef.current && videoRef.current.videoHeight}
            maxWidth={videoRef.current && videoRef.current.videoWidth}
            style={{
              height: `${container.height}px`,
            }}
          >
            <Video
              ref={videoRef}
              hidden={!isVideoPlaying}
              onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
              style={{
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`,
              }}
            />

            <Canvas
              ref={canvasRef}
              width={container.width}
              height={container.height}
            />

            <Flash
              flash={isFlashing}
              onAnimationEnd={() => setIsFlashing(false)}
            />

            {isVideoPlaying && (
              <Button
                roundStyle
                buttonStyle
                onClick={isCanvasEmpty ? handleCapture : handleClear}
              >
                {isCanvasEmpty ? (
                  <i class="fas fa-camera"></i>
                ) : (
                  <i class="fas fa-undo-alt"></i>
                )}
              </Button>
            )}

            {!isCanvasEmpty && (
              <SaveButton roundStyle buttonStyle onClick={handleSave}>
                <i class="fas fa-check"></i>
              </SaveButton>
            )}
          </Container>
        </Wrapper>
      )}
    </Measure>
  );
}
