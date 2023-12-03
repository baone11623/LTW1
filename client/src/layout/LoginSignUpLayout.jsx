import { Outlet } from "react-router-dom";
import styled from "styled-components";
const LayoutCommon = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, rgb(22, 28, 39) 0%, rgb(22, 28, 39) 100%);
  color: white;
  padding-bottom: 62px;
`;
const LoginSignUpLayOut = () => {
  return (
    <LayoutCommon>
      <Outlet></Outlet>
    </LayoutCommon>
  );
};

export default LoginSignUpLayOut;
