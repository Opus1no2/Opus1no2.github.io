import React, { useRef } from "react";
import { useFrame } from 'react-three-fiber';
import { randVelocity, getRandomInt } from '../lib/utils';

const Sphere = () => {
  const meshRef = useRef();

  const v = {
    x: randVelocity(),
    y: randVelocity(),
    z: randVelocity()
  };

  const limit = 50;

  useFrame(() => {
    const mesh = meshRef.current.position;

		mesh.x += v.x
		mesh.y += v.y;
		mesh.z += v.z;

    if (mesh.x >= limit || mesh.x < -limit) {
      mesh.x = -mesh.x;
    }

    if (mesh.y >= limit || mesh.y < -limit) {
      mesh.y = -mesh.y;
    }

    if (mesh.z >= limit || mesh.z < -limit) {
      mesh.z = -mesh.z;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={[getRandomInt(0.5, 1), getRandomInt(0.5, 1), getRandomInt(0.5, 1)]}
      position={[0,0,0]}
    >
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color={0x41d1ff} shininess={100} specular={0xffe501} emissive={0x0} />
    </mesh>
  );
}

export default Sphere;
