import { useState } from "react";
import PropTypes from "prop-types";
import { HeartIcon, StarIcon } from "../../components/icon";
const ShopPage = ({
  productName = "Canon Cmera EOS 2000, Black 10x zoom",
  price = "$998.00",
  evaluate = "7.5",
  describe = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  viewDetail = "View details",
}) => {
  const [heart, setHeart] = useState(false);
  const handleChangeHeart = () => {
    setHeart(!heart);
  };
  return (
    <div className="flex flex-col">
      <div className="w-[920px] flex border border-gray-500 px-[7px] py-[9px] rounded-[10px]">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-[185px] h-[185px] pt-[12px] pb-[12px] pl-[13px] pr-[13px]"
        ></img>

        <div className="flex flex-col">
          <h1>{productName}</h1>
          <span>{price}</span>
          <div className="flex items-center gap-[6px]">
            <StarIcon></StarIcon>
            <span>{evaluate}</span>
          </div>
          <span>{describe}</span>
          <span className="cursor-pointer text-blue-700 text-displayBold font-medium">
            {viewDetail}
          </span>
        </div>
        <div
          className="w-[40px] h-[40px] p-[8px] rounded-[6px] border border-gray-500 cursor-pointer"
          onClick={handleChangeHeart}
        ></div>
      </div>
    </div>
  );
};

export default ShopPage;

ShopPage.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.string,
  evaluate: PropTypes.string,
  describe: PropTypes.string,
  viewDetail: PropTypes.string,
};
