import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Narcissus = () => {
  const Cont = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Video = styled.video`
    transform: scaleX(-1);
    border-radius: 80px;
    border: solid 3px #609e1c;
  `;

  const videoRef = useRef(HTMLVideoElement);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
      videoRef.current.srcObject = stream;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    });
  }, [videoRef]);

  return (
    <Cont>
      <Video ref={videoRef}></Video>
    </Cont>
  );
};

export default Narcissus;
