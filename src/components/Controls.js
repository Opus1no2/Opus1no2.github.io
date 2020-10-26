import React, { useRef } from 'react';
import { useThree, useFrame } from 'react-three-fiber';

const Controls = (props) => {
  const { gl, camera  } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

export default Controls;