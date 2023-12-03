import { useState } from "react";
import Button from "../../../components/button/Button";
import Modal from "react-modal";
import EditInfo from "../../../modals/EditInfo";
const editStyle = {
  overlay: {
    zIndex: "10000",
    backgroundColor: "rgba(33, 40, 48, 0.8)",
  },

  content: {
    width: "712px",
    backgroundColor: "#191c21",
    color: "#fff",
    border: "none",
    borderRadius: "16px",
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Product = () => {
  return (
    <div className="relative">
      <div className="absolute p-3 bottom-0 right-0 -translate-x-2/4 -translate-y-2/4 bg-blue-gray-400 text-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
        +
      </div>
      <ProductList></ProductList>
    </div>
  );
};

const ProductItem = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex gap-[10px] text-white">
      <div>
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-[210px] h-[125px] rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col justify-between py-2">
        <h2>Product Name</h2>
        <h3>Price</h3>
        <div className="flex gap-3">
          <Button
            className="px-2 py !text-sm !h-[40px]"
            onClick={() => setShow(true)}
          >
            Edit
          </Button>
          <Button className="px-2 py !text-sm !h-[40px]">Delete</Button>
        </div>
      </div>
      <Modal
        style={editStyle}
        isOpen={show}
        onRequestClose={() => setShow(false)}
      >
        <EditInfo setShow={setShow}></EditInfo>
      </Modal>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array(6)
        .fill(0)
        .map((item) => (
          <ProductItem key={item}></ProductItem>
        ))}
    </div>
  );
};

export default Product;
