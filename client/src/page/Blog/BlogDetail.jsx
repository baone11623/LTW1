import { useEffect, useState } from "react";
import { endpoint } from "../../utils/endpoint";
import axios from "axios";
import { useParams } from "react-router-dom";
import { convertDatetime } from "../../utils/convertDatetime";

const BlogDetail = () => {
  const param = useParams();
  const { id } = param;
  console.log("id :", id);
  const [data, setData] = useState();
  console.log("data :", data);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${endpoint}/details-blog?detailID=${id}`);
        console.log("res :", res);
        setData(res.data.message);
      } catch (error) {
        console.log("error :", error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>{data?.title}</h1>
      <div>
        <h3>{data?.author}</h3>
        <h3>{convertDatetime(data?.createdAt)}</h3>
      </div>
      <img src={data?.img} alt="" />
      <p>{data?.content}</p>
    </div>
  );
};

export default BlogDetail;
