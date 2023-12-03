import MyInfo from "../../utils/MyInfo";

const Info = () => {
  const { avatar, name, dateofbirth } = MyInfo();
  return (
    <div>
      <span>{name}</span>
      <img src={avatar} alt="" />
      <span>{dateofbirth}</span>
    </div>
  );
};

export default Info;
