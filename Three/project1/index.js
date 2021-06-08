import * as THREE from "./node_modules/three/build/three.module.js";
let renderer, camera, scene;
let material, geometry;

scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 7);
camera.lookAt(0, 0, 0);

material = new THREE.MeshBasicMaterial({ color: 0xfb8e00 });
geometry = new THREE.BoxBufferGeometry(2, 2, 3, 2, 2, 2);

let cube = new THREE.Mesh(geometry, material);
// cube.position.set(0, 0, 0); //optional 0,0,0 is default
scene.add(cube);

renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setClearColor("skyblue");
// document.body.appendChild(renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
