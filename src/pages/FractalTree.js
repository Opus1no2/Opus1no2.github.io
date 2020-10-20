import { Link } from "gatsby";
import React, { useState, useEffect, useRef, useCallback } from 'react';

const FractalTree = () => {
  const [angle, setAngle] = useState(20);
  const [depth, setDepth] = useState(15);

  const xPercent = 0.55;
  const yPercent = 0.83;

  const canvasRef = useRef(null);

  const deg_to_rad = (degs) => {
    return degs * Math.PI / 180;
  };

  const fractal_tree = useCallback((x, y, angle, depth, angleAdjust, ctx) => {
    if (depth !== 0) {
      const xScalePercent = (xPercent * window.innerWidth / 100);
      const yScalePercent = (yPercent * window.innerHeight / 100);

      let x2 = x - Math.cos(deg_to_rad(angle)) * depth * (xScalePercent);
      let y2 = y - Math.sin(deg_to_rad(angle)) * depth * (yScalePercent);

      ctx.beginPath();
      ctx.strokeStyle = `rgb(0, ${255 / depth}, ${255 / depth + 50})`;
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      fractal_tree(x2, y2, angle - angleAdjust, depth - 1, angleAdjust, ctx);
      fractal_tree(x2, y2, angle + angleAdjust, depth - 1, angleAdjust, ctx);
    }
  }, []);


  const draw = useCallback((angle, depth, ctx) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    fractal_tree(window.innerWidth / 2, window.innerHeight, 90, depth, angle, ctx);
  }, [fractal_tree]);

  const adjustAngle = (e) => {
    setAngle(Number(e.target.value));
  };

  const adjustDepth = (e) => {
    setDepth(Number(e.target.value));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (ctx) draw(angle, depth, ctx);
  }, [draw, angle, depth]);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (ctx) fractal_tree(window.innerWidth / 2, window.innerHeight, 90, 15, 20, ctx);
  }, [fractal_tree]);

  return (
    <>
      <div className="pull-left">
        <Link to="/">Home</Link>
      </div>
      <div className="inputs upper-right">
        <label htmlFor="angle">Angle</label>
        <input data-el="angle-adjust" type="number" value={angle} onChange={adjustAngle} />
        <label htmlFor="death">Depth</label>
        <input data-el="depth" type="number" value={depth} onChange={adjustDepth}/>
      </div>
      <canvas ref={canvasRef} id="fractalTree" className="full-page"></canvas>
    </>
  );
};

export default FractalTree;
