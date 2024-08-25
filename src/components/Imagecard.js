import { Menu_IMG } from "../utils/mockdata";

const ImageCard = ({ Data }) => {
  return (
    <div className="h-[170px]">
      <div className="flex justify-center items-center">
        <img
          alt="ImageBanner"
          className="w-[150px] h-[150px]"
          src={Menu_IMG + Data.imageId}
        />
      </div>
    </div>
  );
};
export default ImageCard;
