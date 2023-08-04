import { Picture } from "./styles";
import stars from "../../../public/star.svg";
import picture from "../../../public/picture.png";
export const PictureComponent = () => {
  return (
    <>
      <Picture>
        <figure className="picture">
          <img className="stars" src={stars} />
          <img src={picture} alt="" srcset="" />
          <div />
        </figure>
      </Picture>
    </>
  );
};
