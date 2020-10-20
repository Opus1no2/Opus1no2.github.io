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

camera.position.set(100, 20, 60);
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

const ambient = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambient);

const sunlight = new THREE.PointLight(0xffffff, 3, 100);
sunlight.position.set(0, 0, 0);
scene.add(sunlight);

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
const earthGeom = new THREE.SphereBufferGeometry(7, 32, 32);

const sunGeom = new THREE.SphereBufferGeometry(20, 32, 32);
const sunMat = new THREE.MeshLambertMaterial({
  color: 0xcebd28,
  emissive: 0xc9c441
})

const sun = new THREE.Mesh(sunGeom, sunMat);
scene.add(sun);

const earth = new THREE.Mesh(earthGeom, material);
sun.add(earth)

const moonGeometry = new THREE.SphereBufferGeometry(2, 32, 32);

const moonMat = new THREE.MeshLambertMaterial();
const moon = new THREE.Mesh(moonGeometry, moonMat);

earth.add(moon);


const earthTexture = new THREE.TextureLoader().load('earth_lights_2048.png');
const moonTexture = new THREE.TextureLoader().load('moon_1024.jpg');

moonMat.map = moonTexture;
material.map = earthTexture;

const dist = 40;

function animate(time) {
	requestAnimationFrame(animate);

  time *= 0.0005;
  const moonTime = Date.now() / 500;

  earth.rotation.y += 0.01;
  earth.rotation.x = 0.5;

  earth.position.x = Math.cos(time) * dist;
  earth.position.y = Math.cos(time) * dist;
  earth.position.z = Math.sin(time) * dist;

  moon.rotation.y -= 0.01;
  moon.rotation.x = 0.5;

  // 30 influences the distance
  moon.position.x = Math.cos(moonTime) * 10;

  // doesn't matter if sin or cos
  moon.position.y = Math.cos(moonTime) * 10;
  moon.position.z = Math.sin(moonTime) * 10;

  renderer.render(scene, camera);
  stats.update();
}

animate();
