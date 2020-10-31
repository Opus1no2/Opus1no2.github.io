import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { Canvas, useFrame } from 'react-three-fiber';
import Controls from '../components/Controls';

const Satellite = (props) => {
  const { color, orbit } = props;
  const meshRef = useRef();

  useFrame(({clock}) => {
    const dist = 30;
    const mesh = meshRef.current;
    const time = clock.elapsedTime;

    if (orbit) {
      mesh.position.x = Math.cos(time) * dist;
      mesh.position.y = Math.cos(time) * dist;
      mesh.position.z = Math.sin(time) * dist;
    }
  });

  return (
    <mesh ref={meshRef} position={[0,0,0]} scale={[0.5, 0.5, 0.5]}>
      <sphereBufferGeometry args={[10, 15, 15]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};

const Orbit0 = () => {
  return (
    <div className="full-page">
      <div className="pull-right">
        <Link to="/">Home</Link>
      </div>

      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, look: [0,0,0], position: [40,20,40] }}>
        <directionalLight color={0xffffff} intensity={1} />
        <ambientLight color={0xffffff} intensity={0.2} />
        <Satellite color={'red'} orbit />
        <Satellite color={'skyblue'} />
        <Controls />
        <axesHelper args={50} />
        <gridHelper args={[100, 15]} />
      </Canvas>
    </div>
  );
};

export default Orbit0;
