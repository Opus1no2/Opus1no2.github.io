import React, { useEffect, useCallback } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Link } from 'gatsby';
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
//                       HELPERS                   //
/////////////////////////////////////////////////////
const grid = new THREE.GridHelper(100, 15);
scene.add(grid);

const axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);

const spotLightHelper = new THREE.DirectionalLightHelper(light, 5);
scene.add(spotLightHelper);

/////////////////////////////////////////////////////
//                       CONTROLS                  //
/////////////////////////////////////////////////////
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

const dist = 30;

const Orbit0 = () => {
  const animate = useCallback((time) => {
    requestAnimationFrame(animate);

    time *= 0.001;

    sphere.rotation.y += 0.01;
    sphere.rotation.x = 0.5;

    satellite.position.x = Math.cos(time) * dist;

    // doesn't matter if sin or cos
    satellite.position.y = Math.cos(time) * dist;
    satellite.position.z = Math.sin(time) * dist;

    satellite1.position.x = Math.cos(time) * dist;
    satellite1.position.y = Math.sin(time) * dist;
    satellite1.position.z = Math.sin(time) * dist;

    satellite2.position.x = Math.cos(time) * dist;
    satellite2.position.z = Math.sin(time) * dist;
    renderer.render(scene, camera);
  }, []);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div className="pull-right">
      <Link to="/">Home</Link>
    </div>
  );
};

export default Orbit0;
