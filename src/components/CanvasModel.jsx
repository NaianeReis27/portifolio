import { useFrame, useThree, extend } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

extend({ OrbitControls });
const CanvasModel = () => {

  const { camera, gl } = useThree();

  const gltf = useLoader(GLTFLoader, 'scene.gltf')

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <ambientLight intensity={1.5} />
      <pointLight position={[-3, -1, -1]} intensity={1} />
      <pointLight position={[0, -5, 5]} intensity={0.5} />
      <primitive object={gltf.scene} />
    </>
  );
};

export default CanvasModel;
