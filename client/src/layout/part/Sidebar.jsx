import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import classNames from "../../utils/classNames";
import FeedIcon from "../../components/icon/FeedIcon";
import ProfileIcon from "../../components/icon/ProfileIcon";
import LogoutIcon from "../../components/icon/LogoutIcon";
import DocumentIcon from "../../components/icon/DocumentIcon";
// import { LOCAL_STORAGE_TOKEN } from "../../utils/LocalStoreName";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const SidebarStyled = styled.div`
  @media (max-width: 46.1875em) {
    right: 0;
    height: 56px;
    @media (max-width: 46.1875em) {
      overflow: hidden;
    }

    & .sidebar-list {
      height: 100%;
      display: flex;
      padding: 10px 16px;
      justify-content: space-evenly;
      align-items: center;
      gap: 20px;
      &--item {
        height: 100%;
        position: relative;
        @media (max-width: 46.1875em) {
          border-radius: 0 !important;
          overflow: visible !important;
        }
      }
    }
  }
  & .sidebar-list--item a.active {
    font-weight: bold;
    background-color: #4e5d78;
    color: #fff;
    opacity: 1;
    @media (max-width: 46.1875em) {
      background-color: transparent;
      font-size: 10px;
      font-weight: 400;
      line-height: 16px;
      ::before {
        content: "";
        position: absolute;
        background-color: white;
        bottom: -6px;
        width: 100%;
        height: 3px;
        border-radius: 6px;
        animation: lefttoright 0.25s ease-in;
      }

      @keyframes lefttoright {
        from {
          width: 0%;
          left: 0%;
        }
        to {
          width: 100%;
          left: 0%;
        }
      }
    }
  }

  .sidebar-list--item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    @media (min-width: 46.25em) {
      & div {
        position: absolute;
        background: #fff;
        transform: translate(-50%, -50%);
        pointer-events: none;
        border-radius: 50%;
        animation: animate 1s linear infinite;
      }
    }
    @keyframes animate {
      0% {
        width: 0px;
        height: 0px;
        opacity: 0.5;
      }
      100% {
        width: 500px;
        height: 500px;
        opacity: 0;
      }
    }
  }
`;

const ListSyled = styled.li`
  @media (max-width: 46.1875em) {
    display: ${(props) => props.hidden};
  }
  display: block;
`;

const list = [
  {
    id: 1,
    name: "Product",
    icon: <FeedIcon></FeedIcon>,
    url: "/admin/dashboard",
    hidden: "block",
  },
  {
    id: 2,
    name: "Blog",
    icon: <DocumentIcon></DocumentIcon>,
    url: "/admin/blog",
    hidden: "block",
  },

  {
    id: 6,
    name: "Profile",
    icon: <ProfileIcon></ProfileIcon>,
    url: "/admin/my-profile",
    hidden: "none",
  },

  {
    id: 8,
    name: "Logout",
    icon: <LogoutIcon></LogoutIcon>,
    hidden: "none",
    url: "/login",
    action: true,
  },
];

const SideBar = () => {
  //   const navigate = useNavigate();
  //   const [check, setCheck] = useState();

  const handleClickButton = (e) => {
    let x =
      e.clientX -
      e.target.closest(".sidebar-list--item").getBoundingClientRect().left;
    let y =
      e.clientY -
      e.target.closest(".sidebar-list--item").getBoundingClientRect().top;
    let ripples = document.createElement("div");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    e.target.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  };

  //   useEffect(() => {
  //     const logout = document.querySelector(".logoutClass");
  //     logout.addEventListener("click", () => {
  //       localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  //     });
  //   });

  //   const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

  //   useEffect(() => {
  //     if (!token) {
  //       navigate("/login");
  //       setCheck(true);
  //     } else {
  //       setCheck(false);
  //     }
  //   }, [check, token]);

  return (
    <SidebarStyled className="fixed md:top-0 left-0 bottom-0  bg-darkColors1 md:px-5 ">
      <Link
        to="/"
        className="md:inline-flex md:items-center md:gap-[10px] hidden pr-[6px] py-[25px]"
      >
        <img src="./Logo.png" alt="" />
        <h2 className="text-heading3Bold font-bold text-white ">Meetmax</h2>
      </Link>

      <nav className="md:w-[200px] h-[100%]  md:pt-[10px]  md:relative ">
        <ul className="sidebar-list md:flex md:flex-col md:gap-[10px]">
          {list.length > 0 &&
            list.map((item) => (
              <ListSyled
                hidden={item.hidden}
                key={item.id}
                onClick={handleClickButton}
                className={`sidebar-list--item `}
              >
                <NavLink
                  to={item.url}
                  className={classNames(
                    "bg-transparent md:flex-row md:justify-start md:flex md:items-center md:gap-[20px] md:px-[20px] md:py-[15px] md:text-displayBold  rounded-[10px] text-white text-opacity-85  cursor-pointer text-[10px]  font-normal  flex flex-col items-center justify-between h-full",
                    `${item.action ? "logoutClass" : ""}`
                  )}
                >
                  {item.icon}
                  <span className="md:font-medium">{item.name}</span>
                </NavLink>
              </ListSyled>
            ))}
        </ul>
      </nav>
    </SidebarStyled>
  );
};

export default SideBar;
