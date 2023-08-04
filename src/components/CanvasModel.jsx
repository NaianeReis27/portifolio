import { useFrame, useThree, extend } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

extend({ OrbitControls });
const CanvasModel = () => {

  const { camera, gl } = useThree();

  const gltf = useLoader(GLTFLoader, 'cake.glb')

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <ambientLight intensity={0} />
      <primitive object={gltf.scene} />
    </>
  );
};

export default CanvasModel;
