// import SearchIcon from "../../components/icons/SearchIcon";
import PropTypes from "prop-types";
import styled from "styled-components";
// import Avatar from "../../components/avatar/Avatar";
// import MessagesIcon from "../../components/icons/MessagesIcon";
import { Link } from "react-router-dom";
// import useDebounce from "../../hooks/useDebounce";
// import MyInfo from "../../utils/myInfo";

const HeaderStyled = styled.header`
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 0;
  width: -webkit-fill-available;
  height: 78px;
  padding: 18px 0;
  padding-right: 18px;
  justify-content: space-between;
  align-items: center;
  color: white;

  & .result-search {
    & li,
    & li > div {
      border-radius: 4px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 46.1875em) {
    left: 0;
    right: 0;
    height: 62px;
    padding: 15px 20px;
    & .header__wrap {
      gap: 20px;
    }
    & .wrap-input {
      flex: 1;
    }
  }
`;

const HeaderAdmin = () => {
  //   const [search, setSearch] = useState("");
  //   const searchDebounce = useDebounce(search, 500);
  //   const { show, setShow, nodeRef } = useClickOutSide();
  //   const [loading, setLoading] = useState(false);

  //   const { name, avatar } = MyInfo();

  //   const listSearch = useSelector(
  //     (state) => state?.search?.resultSearch?.message
  //   );

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     getCurrentUser(LOCAL_STORAGE_TOKEN, dispatch, toast);
  //   }, []);
  return (
    <HeaderStyled className="bg-darkColors1">
      <div className="flex items-center justify-between w-full header__wrap">
        {/* <img src="https://source.unsplash.com/random"></img> */}

        <div className="relative">
          <input
            name="search"
            id="search"
            placeholder="Search for something here..."
            // onchange={(e) => setSearch(e.target.value)}
            // onclick={() => setShow(true)}
            className="border border-white md:rounded-[10px] md:!py-[10px] md:h-[42px] rounded-md py-2 h-8 placeholder:text-bodyRegular md:placeholder:text-bodyBold"
            // classNameWrap="md:w-[542px]"
          >
            {/* <SearchIcon /> */}
            {/* Icon */}
          </input>
          {/* {search.trim().length > 0 && show && (
            <ul
              className="result-search bg-[#4e5d78] absolute w-full max-h-[150px] overflow-y-auto flex flex-col gap-1 rounded-lg p-2 top-[45px]"
              ref={nodeRef}
            >
              {loading
                ? Array(4)
                    .fill(0)
                    .map((item, index) => (
                      <li key={index}>
                        <LoadingSkeleton height="32px"></LoadingSkeleton>
                      </li>
                    ))
                : listSearch?.length > 0 && !loading
                ? listSearch.map((item) => (
                    <li
                      key={item._id}
                      className="cursor-pointer hover:bg-[#6b7d9f] px-3 py-1"
                    >
                      {item.username}
                    </li>
                  ))
                : listSearch?.length === 0 && <li className="">No results</li>}
            </ul>
          )} */}
        </div>

        <Link to="/message" className="p-1 md:hidden">
          {/* <MessagesIcon></MessagesIcon> */}
          icon
        </Link>
        <Info></Info>
      </div>
    </HeaderStyled>
  );
};

export default HeaderAdmin;

function Info({ name = "user", src = "https://source.unsplash.com/random" }) {
  return (
    <div className="bg-darkColors2 items-center rounded-[10px] pl-[20px] gap-[20px] text-white md:flex hidden">
      <div className="text-displayBold font-medium">{name}</div>
      <img
        src={src}
        alt=""
        className="h-[42px] w-[42px] object-cover rounded-[10px]"
      />
    </div>
  );
}

Info.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};
