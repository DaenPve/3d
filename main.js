import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// Creamos una escena
const scene = new THREE.Scene();

// Creamos una cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Creamos un renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load('models/Simple Truth Thing.glb', function ( gltf ) {

	scene.add( gltf.scene );
  console.log("asdasda")

}, undefined, function ( error ) {

	console.error( error );

} );

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

animate();