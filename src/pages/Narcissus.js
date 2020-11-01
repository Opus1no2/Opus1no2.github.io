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
    border: solid 10px #609e1c;
    box-shadow:
      0 0 0 10px hsl(20, 100%, 50%),
      0 0 0 15px hsl(50, 100%, 60%),
      0 0 0 20px hsl(10, 100%, 70%),
      0 0 0 25px hsl(200, 100%, 80%),
      0 0 0 30px hsl(150, 100%, 90%);
  `;

  const videoRef = useRef();

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
