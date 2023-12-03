import Button from "../../../components/button/Button";
import Modal from "react-modal";
import EditInfo from "../../../modals/EditInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { endpoint } from "../../../utils/endpoint";
import { LOCAL_STORAGE_TOKEN } from "../../../utils/LocalStoreName";
const editStyle = {
  overlay: {
    zIndex: "10000",
    backgroundColor: "rgba(33, 40, 48, 0.8)",
  },
};

const BlogAdmin = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${endpoint}/get-blog?page=1&limit=100`);
        setData(res.data.results.results);
      } catch (error) {
        console.log("error :", error);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${endpoint}/delete-blog?blogId=${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`,
        },
      });
      console.log("res :", res);
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div className="relative">
      <div className="absolute p-3 bottom-0 right-0 -translate-x-2/4 -translate-y-2/4 bg-blue-gray-400 text-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
        +
      </div>
      <BlogList
        setShow={setShow}
        data={data}
        handleDelete={handleDelete}
      ></BlogList>
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

const BlogItem = ({ setShow, title, description, handleDelete, id }) => {
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
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="flex gap-3">
          <Button
            className="px-2 py !text-sm !h-[40px]"
            onClick={() => setShow(true)}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(id)}
            className="px-2 py !text-sm !h-[40px]"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

const BlogList = ({ data, setShow, handleDelete }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data &&
        data?.map((item) => (
          <BlogItem
            key={item}
            setShow={setShow}
            title={item.title}
            // description={item.description}
            id={item._id}
            handleDelete={handleDelete}
          ></BlogItem>
        ))}
    </div>
  );
};

export default BlogAdmin;
