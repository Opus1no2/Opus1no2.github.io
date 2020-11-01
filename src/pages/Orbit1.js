import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import Controls from '../components/Controls';
import earthImg from '../images/earth_lights_2048.png';
import moonImg from '../images/moon_1024.jpg';
import HeaderNav from '../components/HeaderNav';

const Earth = () => {
  const earthRef = useRef();
  const loader = new TextureLoader();
  const texture = loader.load(earthImg);

  useFrame(
    ({ clock }) =>
      (earthRef.current.rotation.x = earthRef.current.rotation.y = earthRef.current.rotation.z =
        Math.cos(clock.getElapsedTime() / 8) * Math.PI));

  return (
    <mesh ref={earthRef}>
      <sphereBufferGeometry args={[10, 32, 32]} />
      <meshLambertMaterial map={texture}/>
    </mesh>
  );
};

const Moon = () => {
  const moonRef = useRef();
  const loader = new TextureLoader();
  const texture = loader.load(moonImg);
  const dist = 30;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const moon = moonRef.current;

    moon.rotation.y -= 0.01;
    moon.rotation.x = 0.5;

    moon.position.x = Math.cos(time) * dist;
    moon.position.y = Math.cos(time) * dist;
    moon.position.z = Math.sin(time) * dist;
  });

  return (
    <mesh ref={moonRef}>
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshLambertMaterial map={texture}/>
    </mesh>
  );
};

const Orbit1 = () => {
  return (
    <div className="full-page">
      <HeaderNav />
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, look: [0,0,0], position: [40,20,40]}}>
        <directionalLight color={0xffffff} intensity={1} position={[-10, 0, 30]}/>
        <ambientLight color={0xffffff} intensity={0.5} />
        <Earth />
        <Moon />
        <Controls />
      </Canvas>
    </div>
  );
};

export default Orbit1;
