import CanvasModel from "../components/CanvasModel";
import { HeaderComponent } from "../components/header";
import { Canvas } from "@react-three/fiber";
import { BannerComponent } from "../components/banner";
import { BannerSecondaryComponent } from "../components/bannerSecondary";
const LandingPage = () => {
  return (
    <>
    <HeaderComponent/>
    <BannerComponent></BannerComponent>
    <BannerSecondaryComponent></BannerSecondaryComponent>
    <Canvas>
      <CanvasModel/>
    </Canvas>
    </>
    
  );
};

export default LandingPage;
