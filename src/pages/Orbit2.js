import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import Controls from '../components/Controls';
import earthImg from '../images/earth_lights_2048.png';
import moonImg from '../images/moon_1024.jpg';
import HeaderNav from '../components/HeaderNav';

const Sun = ({child}) => {
  return (
    <mesh>
      <sphereBufferGeometry args={[20,32,32]} />
      <meshLambertMaterial color={0xcebd28} emissive={0xc9c441} />
      {child()}
    </mesh>
  )
};

const Earth = ({child}) => {
  const earthRef = useRef();
  const loader = new TextureLoader();
  const texture = loader.load(earthImg);
  const dist = 40;

  useFrame(({ clock }) => {
    const earth = earthRef.current;
    const time = clock.getElapsedTime();

    earth.rotation.y += 0.01;
    earth.rotation.x = 0.5;

    earth.position.x = Math.cos(time) * dist;
    earth.position.y = Math.cos(time) * dist;
    earth.position.z = Math.sin(time) * dist;
  });

  return (
    <mesh ref={earthRef}>
      <sphereBufferGeometry args={[7, 32, 32]} />
      <meshLambertMaterial map={texture}/>
      {child()}
    </mesh>
  );
};

const Moon = () => {
  const moonRef = useRef();
  const loader = new TextureLoader();
  const texture = loader.load(moonImg);
  const dist = 10;

  useFrame(() => {
    const time = Date.now() / 500;
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

const Orbit2 = () => {
  return (
    <div className="full-page">
      <HeaderNav />
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, look: [0,0,0], position: [100, 20, 60]}}>
        <directionalLight color={0xffffff} intensity={1} position={[-10, 0, 30]}/>
        <ambientLight color={0xffffff} intensity={0.5} />
        <pointLight color={0xffffff} intensity={0.5} distance={100} />
        <Sun child={() => <Earth child={Moon} />} />
        <Controls />
      </Canvas>
    </div>
  );
};

export default Orbit2;
