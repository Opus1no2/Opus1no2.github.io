import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const Narcissus = () => {
  const [color, setColor] = useState(0);
  const [dir, setDir] = useState('');

  const canvasRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
      videoRef.current.srcObject = stream;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    });
  }, [videoRef]);

  useEffect(() => {
    const changeColor = () => {
      if (color === 0) {
        setDir('inc');
      }
      if (color === 255) {
        setDir('dec');
      }

      if (dir === 'inc') {
        setColor(color => color + 1);
      }
      if (dir === 'dec') {
        setColor(color => color - 1);
      }
    };

    let _id = setInterval(changeColor, 100);

    return () => clearInterval(_id);
  }, [color, dir]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = `hsl(${color}, 100%, 25%)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [color]);

  return (
    <Cont>
      <Canvas ref={canvasRef} />
      <Video ref={videoRef}></Video>
    </Cont>
  );
};

export default Narcissus;
