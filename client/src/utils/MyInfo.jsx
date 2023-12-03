import { useSelector } from "react-redux";

const MyInfo = () => {
  const name = useSelector(
    (state) => state?.auth?.auth?.user?.message?.username
  );
  const avatar = useSelector(
    (state) => state?.auth?.auth?.user?.message?.avatar
  );
  const dateofbirth = useSelector(
    (state) => state?.auth?.auth?.user?.message?.dateofbirth
  );
  const id = useSelector((state) => state?.auth?.auth?.user?.message?._id);
  const profileInfo = {
    name: name,
    avatar: avatar,
    id: id,
    dateofbirth: dateofbirth,
  };
  return profileInfo;
};

export default MyInfo;
