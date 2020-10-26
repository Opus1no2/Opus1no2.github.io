import React, { useEffect, useCallback } from 'react';
import { Link } from 'gatsby';
import { Canvas, extend } from 'react-three-fiber';
import Sphere from '../components/Sphere';
import Controls from '../components/Controls';

const Spheres = () => {
  const spheres = [...Array(500).fill(null)].map((_, i) => {
    return <Sphere key={i} />
  });

  return (
    <div className="full-page">
      <div className="pull-right">
        <Link to="/">Home</Link>
      </div>

      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, look: [0,0,0], position: [40,20,40] }}>
        <directionalLight color={0xffffff} intensity={1} position={[30,0,30]} />
        <ambientLight color={0xffffff} intensity={0.2} />
        {spheres}
        <Controls />
        <axesHelper args={50} />
        <gridHelper args={[100, 15]} />
      </Canvas>
    </div>
  );
};

export default Spheres;
