import BlogListItem from "./BlogListItem";

const BlogList = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
      {Array(6)
        .fill(0)
        .map((item, index) => (
          <BlogListItem key={index}></BlogListItem>
        ))}
    </div>
  );
};

export default BlogList;
