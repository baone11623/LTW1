import { Button, Input } from "@material-tailwind/react";
import PropTypes from "prop-types";

const Information = ({
  title = "",
  blog = "",
  description = "",
  price,
  setShow,
}) => {
  return (
    <div className="px-[40px] py-[20px] mt-[-30px]">
      <div className="flex gap-[20px]">
        <div className="w-[286px] flex flex-col gap-[10px] mb-[20px]">
          <span>Title</span>
          <Input
            name="name"
            placeholder={title}
            className="rounded-[10px] border border-gray-500 !p-[10px]"
          />
        </div>

        <div className="w-[286px] flex flex-col gap-[10px]">
          <span>Description</span>
          <Input
            name="name"
            placeholder={description}
            className="rounded-[10px] border border-gray-500 !p-[10px]"
          />
        </div>
      </div>

      <div className="flex gap-[20px]">
        <div className="w-[286px] flex flex-col gap-[10px] mb-[20px]">
          <span>Blog</span>
          <Input
            name="name"
            placeholder={blog}
            className="rounded-[10px] border border-gray-500 !p-[10px]"
          />
        </div>

        <div className="w-[286px] flex flex-col gap-[10px]">
          <span>Price</span>
          <Input
            name="name"
            placeholder={price}
            className="rounded-[10px] border border-gray-500 !p-[10px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-[20px] justify-end">
        <span className="cursor-pointer" onClick={() => setShow(false)}>
          Cancel
        </span>
        <Button className="w-[80px] h-[40px] px-[23px] py-[9px] text-white text-bodyBold bg-blue-700">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Information;

Information.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  blog: PropTypes.string,
  price: PropTypes.string,
  setShow: PropTypes.func,
};
