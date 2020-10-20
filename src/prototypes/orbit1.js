import './styles/index.scss';

import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as THREE from 'three';
const scene = new THREE.Scene();

/////////////////////////////////////////////////////
//                      CAMERA                     //
/////////////////////////////////////////////////////
const fieldOfView = 75;
const aspectRatio = window.innerWidth / window.innerHeight;
const nearClippingPlane = 0.1;
const farClippingPlane = 1000;

const camera = new THREE.PerspectiveCamera(
  fieldOfView, aspectRatio, nearClippingPlane, farClippingPlane
);

camera.position.set(40, 20, 40);
camera.lookAt(new THREE.Vector3(0,0,0));

/////////////////////////////////////////////////////
//                      Renderer                   //
/////////////////////////////////////////////////////
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.classList.add('full-page');
document.body.appendChild(renderer.domElement);


/////////////////////////////////////////////////////
//                       LIGHT                     //
/////////////////////////////////////////////////////
const light = new THREE.DirectionalLight(0xffffff, 1);

light.position.set(-10, 0, 30);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambient);

/////////////////////////////////////////////////////
//                       STATS                     //
/////////////////////////////////////////////////////
const stats = new Stats();
document.body.appendChild(stats.domElement);

/////////////////////////////////////////////////////
//                       CONTROLS                  //
/////////////////////////////////////////////////////
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

const material = new THREE.MeshLambertMaterial({});
const geometry = new THREE.SphereBufferGeometry(10, 32, 32);

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

const moonGeometry = new THREE.SphereBufferGeometry(2, 32, 32);

const moonMat = new THREE.MeshLambertMaterial();
const moon = new THREE.Mesh(moonGeometry, moonMat);

scene.add(moon);

const dist = 30;

const earthTexture = new THREE.TextureLoader().load('earth_lights_2048.png');
const moonTexture = new THREE.TextureLoader().load('moon_1024.jpg');

moonMat.map = moonTexture;
material.map = earthTexture;

function animate(time) {
	requestAnimationFrame(animate);

  time *= 0.0005;

  earth.rotation.y += 0.01;
  earth.rotation.x = 0.5;

  moon.rotation.y -= 0.01;
  moon.rotation.x = 0.5;

  // 30 influences the distance
  moon.position.x = Math.cos(time) * dist;

  // doesn't matter if sin or cos
  moon.position.y = Math.cos(time) * dist;
  moon.position.z = Math.sin(time) * dist;

  renderer.render(scene, camera);
  stats.update();
}

animate();
