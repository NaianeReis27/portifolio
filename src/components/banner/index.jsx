import { Banner } from "./styles";
import { PictureComponent } from "../picture";
import detail from "../../../public/detail.svg";
export const BannerComponent = () => {
  return (
    <>
      <Banner>
        
        <div>
          <PictureComponent></PictureComponent>
        </div>

        <figure>
          <img src={detail} className="detail" alt="" srcset="" />
        </figure>
      </Banner>
    </>
  );
};
