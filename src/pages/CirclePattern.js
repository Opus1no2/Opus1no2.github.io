import React, { useEffect, useRef, useState, useCallback } from 'react';
import HeaderNav from '../components/HeaderNav';

// It is what it is
const CirclePattern = () => {
  const sections = 200;

  const canvasRef = useRef(null);
  const multiRef = useRef(0.01);

  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(600);
  const [point_coords, setPointCoords] = useState([]);

  const radius = width / 2;

  const draw_circle = useCallback((ctx) => {
    ctx.beginPath();
    ctx.strokeStyle = 'skyblue';
    ctx.arc(width / 2, width / 2, width / 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
  },[width]);

  const get_x_coord = useCallback((i, sections, radius) => {
    return Math.round(width / 2 * Math.cos((i * (2 * Math.PI)) / sections) + radius);
  }, [width]);

  const get_y_coord = useCallback((i, sections, radius) => {
    return Math.round(width / 2 * Math.sin((i * (2 * Math.PI)) / sections) + radius);
  }, [width]);

  const draw_lines = useCallback((point_coords, sections, radius, ctx) => {
    for (let i = 0; i < point_coords.length; i++) {

      const line_to = i * multiRef.current;
      const nextX = get_x_coord(line_to, sections, radius);
      const nextY = get_y_coord(line_to, sections, radius);

      ctx.beginPath();
      ctx.strokeStyle = `rgb(20, ${Math.floor(255 % i)}, ${Math.floor(255 % i + 50)})`;
      ctx.moveTo(point_coords[i].x, point_coords[i].y);
      ctx.lineTo(nextX, nextY);
      ctx.closePath();
      ctx.stroke();
    }
  }, [get_x_coord, get_y_coord]);

  const animate = useCallback((ctx, canvas) => {
    multiRef.current += 0.01;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (multiRef.current >= 360) {
      multiRef.current = 0.00;
    }

    draw_circle(ctx);
    draw_lines(point_coords, sections, radius, ctx);
  }, [draw_circle, draw_lines, point_coords, radius]);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setWidth(window.innerWidth);
    }

    if (window.innerHeight <= 700) {
      setHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < sections; i++) {
      const x = get_x_coord(i, sections, radius);
      const y = get_y_coord(i, sections, radius);

      setPointCoords(prev => [...prev, { x, y }]);
    }
  }, [get_x_coord, get_y_coord, radius]);

  useEffect(() => {
    let _id;
    let didCancel = false;

    if (!didCancel) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = width;
      canvas.height = height;
      draw_circle(ctx);
      animate(ctx, canvas);
      _id = setInterval(() => { animate(ctx, canvas) }, 60);
    }

    return () => {
      didCancel = true;
      clearInterval(_id);
    };
  }, [draw_circle, animate, height, width]);

  return (
    <>
      <HeaderNav />
      <div className="cont">
        <canvas ref={canvasRef} id="circle"></canvas>
      </div>
    </>
  );
};

export default CirclePattern;
