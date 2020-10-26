import React, { useEffect, useCallback } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Link } from 'gatsby';
import * as THREE from 'three';

const Spheres = () => {
  const scene = new THREE.Scene();
  const fieldOfView = 75;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const nearClippingPlane = 0.1;
  const farClippingPlane = 1000;

  const camera = new THREE.PerspectiveCamera(
    fieldOfView, aspectRatio, nearClippingPlane, farClippingPlane
  );

  camera.position.set(40, 20, 40);
  camera.lookAt(new THREE.Vector3(0,0,0));

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.classList.add('full-page');

  // todo: fix
  //document.body.appendChild(renderer.domElement);

  const grid = new THREE.GridHelper(100, 15);
  scene.add(grid);

  const axesHelper = new THREE.AxesHelper(50);
  scene.add(axesHelper);

  const colors = [
    '#52aba5',
    '#1f6e68',
    '#00b0a4',
  ]

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const material = new THREE.MeshLambertMaterial();
  const geometry = new THREE.SphereBufferGeometry(1, 32, 32);

  function sphereInstance(geometry, material, color) {
    material.color.set(color);

    const sphere = new THREE.Mesh(geometry, material);

    sphere.scale.x = getRandomInt(0.5, 1);
    sphere.scale.y = getRandomInt(0.5, 1);
    sphere.scale.z = getRandomInt(0.5, 1);

    const rand = () => {
      let num = Math.random() * 0.1;
      num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
      return num;
    };

    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;

    Object.assign(sphere, { vx: rand() });
    Object.assign(sphere, { vy: rand() });
    Object.assign(sphere, { vz: rand() });
    scene.add(sphere);

    return sphere;
  }

  const spheres = [];
  for (let i = 0; i < 700; i++) {
    const rand = colors[Math.floor(Math.random() * colors.length)];
    spheres.push(sphereInstance(geometry, material, rand));
  }

  const light = new THREE.DirectionalLight(0xffffff, 2);

  light.position.set(30, 0, 30);
  scene.add(light);

  const spotLightHelper = new THREE.DirectionalLightHelper(light, 5);
  scene.add(spotLightHelper);

  const ambient = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambient);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1, 0);
  controls.update();

  const animate = useCallback((time) => {
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

    requestAnimationFrame(animate);
  }, [camera, renderer, scene, spheres]);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div className="pull-right">
      <Link to="/">Home</Link>
    </div>
  );
};

export default Spheres;
