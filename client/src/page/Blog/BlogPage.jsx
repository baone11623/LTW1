import BlogList from "../Home/part/BlogList";
import Title from "../Home/part/Title";

const BlogPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <Title title={"Blog Page"}></Title>
      <BlogList></BlogList>
    </div>
  );
};

export default BlogPage;
