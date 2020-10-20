import React, { useEffect, useCallback } from "react"
import About from '../components/About';
import Portrait from '../components/Portrait';
import Skills from '../components/Skills';
import Games from '../components/Games';
import Prototypes from '../components/Prototypes';
//import '../lib/index'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';
import { GlitchPass } from '../lib/GlitchPass.js';
import * as THREE from 'three';

export default function Home() {
  const scene = new THREE.Scene();

  const fieldOfView = 75;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const nearClippingPlane = 0.1;
  const farClippingPlane = 1000;

  const camera = new THREE.PerspectiveCamera(
    fieldOfView, aspectRatio, nearClippingPlane, farClippingPlane
  );

  camera.position.set(30, 20, 30);
  camera.lookAt(new THREE.Vector3(0,0,0));

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, document.body.offsetHeight);
  renderer.domElement.classList.add('full-page');
  document.body.appendChild(renderer.domElement);

  scene.fog = new THREE.Fog('skyblue', 10, 70);

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const material = new THREE.MeshPhongMaterial({
    color: 0x41d1ff,
    shininess: 100,
    specular: 0xffe501,
    emissive: 0x0,
  });

  const geometry = new THREE.SphereBufferGeometry(1, 32, 32);

  function sphereInstance(geometry, material) {
    const sphere = new THREE.Mesh(geometry, material);

    sphere.scale.x = getRandomInt(0.5, 1);
    sphere.scale.y = getRandomInt(0.5, 1);
    sphere.scale.z = getRandomInt(0.5, 1);

    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;

    const rand = () => {
      let num = Math.random() * 0.1;
      num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
      return num;
    };

    sphere.rotation.x = 1;
    sphere.rotation.y = 1;

    Object.assign(sphere, { vx: rand() });
    Object.assign(sphere, { vy: rand() });
    Object.assign(sphere, { vz: rand() });

    scene.add(sphere);

    return sphere;
  }

  const spheres = [];
  for (let i = 0; i < 700; i++) {
    spheres.push(sphereInstance(geometry, material));
  }

  const light = new THREE.DirectionalLight(0xffffff, 1);

  light.position.set(-10, 10, 10);
  scene.add(light);

  const ambient = new THREE.AmbientLight(0xffffff, 0.1);
  scene.add(ambient);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const glitchPass = new GlitchPass(50);
  composer.addPass(glitchPass);

  let effect = new ShaderPass(DotScreenShader);
  effect.uniforms['scale'].value = 4;
  composer.addPass(effect);

  let effect1 = new ShaderPass(RGBShiftShader);
  effect1.uniforms['amount'].value = 0.0015;
  composer.addPass(effect1);

  const animate = useCallback((time) => {
    requestAnimationFrame(animate);

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    for(let i = 0; i < spheres.length; i++) {
      if (spheres[i].position.x >= 50 ||
        spheres[i].position.x < -50) {
        spheres[i].vx = -spheres[i].vx;
      }

      if (spheres[i].position.y >= 50 ||
        spheres[i].position.y < -50) {
        spheres[i].vy = -spheres[i].vy;
      }

      if (spheres[i].position.z >= 50 ||
        spheres[i].position.z < -50) {

        spheres[i].vz = -spheres[i].vz;
      }

      spheres[i].position.x += spheres[i].vx;
      spheres[i].position.y += spheres[i].vy;
      spheres[i].position.z += spheres[i].vz;
    }

    renderer.render(scene, camera);
    composer.render();
  }, [camera, composer, renderer, scene, spheres]);

  const handleResize = useCallback(() => {
    renderer.setSize(window.innerWidth, document.body.offsetHeight);
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.lookAt(new THREE.Vector3(0,0,0));
    camera.updateProjectionMatrix();
  }, [camera, renderer]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    animate();
  }, [animate]);

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
    </main>
  )
}
