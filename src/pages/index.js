import React from 'react';
import About from '../components/About';
import Portrait from '../components/Portrait';
import Skills from '../components/Skills';
import Games from '../components/Games';
import Prototypes from '../components/Prototypes';
import { Canvas } from 'react-three-fiber';
import Sphere from '../components/Sphere';
import Effects from '../components/Effects';

export default function Home() {
  const sphereCnt = 700;
  const spheres = [...Array(sphereCnt).fill(null)];

  return (
    <main>
      <div className="cont">
        <div className="row">
          <Portrait />
          <About />
          <Skills />
        </div>
        <div className="row last space-between">
          <Games />
          <Prototypes />
        </div>
      </div>
      <div className="full-page">
        <Canvas camera={{fov: 75, near: 0.1, far: 1000, look: [0,0,0], position: [30,20,30]}}>
          <directionalLight position={[-10, 10, 10]} intensity={1} color={0xffffff}/>
          <ambientLight intensity={0.1} color={0xffffff} />
          <fog attach="fog" args={['skyblue', 0, 25]} />
          {spheres.map((_, i) => <Sphere key={i}/>)}
          <Effects />
        </Canvas>
      </div>
    </main>
  );
}
