import { useSelector } from "react-redux";

const MyInfo = () => {
  const name = useSelector(
    (state) => state?.auth?.auth?.user?.message?.username
  );
  const avatar = useSelector(
    (state) => state?.auth?.auth?.user?.message?.avatar
  );
  const id = useSelector((state) => state?.auth?.auth?.user?.message?._id);
  const profileInfo = {
    name: name,
    avatar: avatar,
    id: id,
  };
  return profileInfo;
};

export default MyInfo;
