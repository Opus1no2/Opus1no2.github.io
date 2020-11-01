import React from 'react';
import { Canvas } from 'react-three-fiber';
import HeaderNav from '../components/HeaderNav';

const vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x + 10.0, position.y, position.z + 5.0, 1.0);
  }
`;

const fragmentShader = `
  void main() {
    gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
  }
`;

const Shaders0 = () => {
  return (
    <div className="full-page">
      <HeaderNav />
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, look: [0,0,0], position: [40,20,40] }}>
        <ambientLight color={0xffffff} intensity={0.2} />
          <mesh>
            <boxGeometry args={[10, 10, 10]} />
            <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
          </mesh>
      </Canvas>
    </div>
  );
};

export default Shaders0;
