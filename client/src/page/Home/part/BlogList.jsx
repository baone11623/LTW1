import { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";
import axios from "axios";
import { endpoint } from "../../../utils/endpoint";

const BlogList = () => {
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
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
      {data &&
        data?.map((item, index) => (
          <BlogListItem
            title={item.title}
            key={index}
            datetime={item.createdAt}
            link={`/blog/${item._id}`}
          ></BlogListItem>
        ))}
    </div>
  );
};

export default BlogList;
