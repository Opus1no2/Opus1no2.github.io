import React, { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Link } from 'gatsby';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

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


const light = new THREE.DirectionalLight(0xffffff, 1);

light.position.set(-10, 0, 30);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambient);

const grid = new THREE.GridHelper(100, 15);
scene.add(grid);

const axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);

const spotLightHelper = new THREE.DirectionalLightHelper(light, 5);
scene.add(spotLightHelper);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

const material = new THREE.MeshLambertMaterial({color: 'skyblue'});
const geometry = new THREE.SphereBufferGeometry(10, 15, 15);

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const satGeometry = new THREE.SphereBufferGeometry(2, 15, 15);

const satMat = new THREE.MeshLambertMaterial({color: 'red',});
const satMat1 = new THREE.MeshLambertMaterial({color: 'blue',});
const satMat2 = new THREE.MeshLambertMaterial({color: 'green',});

const satellite = new THREE.Mesh(satGeometry, satMat);
const satellite1 = new THREE.Mesh(satGeometry, satMat1);
const satellite2 = new THREE.Mesh(satGeometry, satMat2);

scene.add(satellite);
scene.add(satellite1);
scene.add(satellite2);


const Satellite = ({ color }) => {
  const meshRef = useRef();

  useFrame(({clock}) => {
    const dist = 30;
    const mesh = meshRef.current;
    const time = clock.elapsedTime *= 0.001;

    mesh.position.x = Math.cos(time) * dist;
    mesh.position.y = Math.cos(time) * dist;
    mesh.position.z = Math.sin(time) * dist;
  });

  return (
    <mesh ref={meshRef} position={[0,0,0]} scale={[1, 1, 1]}>
      <sphereBufferGeometry args={[10, 15, 15]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};

const Orbit0 = () => {
  const animate = (time) => {
    time *= 0.001;

    sphere.rotation.y += 0.01;
    sphere.rotation.x = 0.5;
  };

  return (
    <div className="full-page">
      <div className="pull-right">
        <Link to="/">Home</Link>
      </div>

      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, look: [0,0,0], position: [40,20,40] }}>
        <directionalLight color={0xffffff} intensity={1} />
        <ambientLight color={0xffffff} intensity={0.2} />
        <Satellite color={'red'} />
        <Satellite color={'blue'} />
        <Satellite color={'green'} />
      </Canvas>
    </div>
  );
};

export default Orbit0;
