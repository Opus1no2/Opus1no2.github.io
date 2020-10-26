import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree, extend } from 'react-three-fiber';
import { EffectComposer  } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass  } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass  } from 'three/examples/jsm/postprocessing/ShaderPass';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { GlitchPass } from '../lib/GlitchPass.js';

extend({ EffectComposer, RenderPass, ShaderPass, GlitchPass });

const Effects = () => {
  const { gl, scene, camera } = useThree();
  const composerRef = useRef();
	const [factorOn, setFactorOn] = useState(false);
	const [factor, setFactor] = useState(0);

  useFrame(() => {
    composerRef.current.render();
  }, 1);

	useEffect(() => {
		const _id = setInterval(() => setFactorOn(true), 5000);
		return () => clearInterval(_id);
	});

	useEffect(() => {
		if (factorOn) {
			setFactor(0.5);
			setTimeout(() => setFactor(0), 1000);
			setFactorOn(false);
		}
	}, [factorOn, factor]);

  return (
    <effectComposer ref={composerRef} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <shaderPass attachArray="passes" args={[DotScreenShader]} uniforms-scale-value={4} />
      <shaderPass attachArray="passes" args={[RGBShiftShader]} uniforms-amount-value={0.0015} />
      <glitchPass attachArray="passes" factor={factor} />
    </effectComposer>
  );
};

export default Effects;
