import BlogList from "./part/BlogList";
import Slice from "./part/Slice";
import Title from "./part/Title";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <Title title={"Home Page"}></Title>
      <Slice></Slice>
      <BlogList></BlogList>
    </div>
  );
};

export default HomePage;
