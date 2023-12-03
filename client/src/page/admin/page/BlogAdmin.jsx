import Button from "../../../components/button/Button";

const BlogAdmin = () => {
  return (
    <div className="relative">
      <div className="absolute p-3 bottom-0 right-0 -translate-x-2/4 -translate-y-2/4 bg-blue-gray-400 text-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
        +
      </div>
      <BlogList></BlogList>
    </div>
  );
};

const BlogItem = () => {
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
        <h2>Title Blog</h2>
        <p>Description</p>
        <div className="flex gap-3">
          <Button className="px-2 py !text-sm !h-[40px]">Edit</Button>
          <Button className="px-2 py !text-sm !h-[40px]">Delete</Button>
        </div>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array(6)
        .fill(0)
        .map((item) => (
          <BlogItem key={item}></BlogItem>
        ))}
    </div>
  );
};

export default BlogAdmin;
