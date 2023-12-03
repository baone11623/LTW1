import PropTypes from "prop-types";
import styled from "styled-components";
import { convertDatetime } from "../../../utils/convertDatetime";
import { Link } from "react-router-dom";

const TitleStyled = styled.h2`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const BlogListItem = ({
  title = "Test",
  avatar = "https://source.unsplash.com/random",
  name = "alec",
  datetime = "18/11/2023",
  img = "https://source.unsplash.com/random",
  link,
}) => {
  return (
    <Link
      to={link}
      className="rounded-xl p-4 flex flex-col gap-4 border border-[#E8E8EA]"
    >
      <div>
        <img
          src={img}
          alt=""
          className="h-[240px] w-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-5 justify-between">
        <TitleStyled className="text-2xl leading-7 font-semibold">
          {title}
        </TitleStyled>
        <span className="flex items-center gap-5">
          <span className="flex gap-3 items-center">
            <img
              src={avatar}
              alt=""
              className="w-9 h-9 object-cover rounded-full"
            />
            <h4 className="text-base font-medium text-[#97989F]">{name}</h4>
          </span>
          <h4 className="text-[#97989F] text-base font-normal">
            {convertDatetime(datetime)}
          </h4>
        </span>
      </div>
    </Link>
  );
};

BlogListItem.propTypes = {
  title: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  datetime: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
};

export default BlogListItem;
