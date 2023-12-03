import styled from "styled-components";
import propTypes from "prop-types";
import Information from "../page/admin/page/Information";
import { CloseIcon } from "../components/icon";

const EditInfoContainerStyled = styled.div`
  width: 100%;
  position: relative;
`;
const EditInfo = ({ setShow }) => {
  return (
    <EditInfoContainerStyled>
      <div
        className="flex items-center justify-end cursor-pointer"
        onClick={() => setShow(false)}
      >
        <CloseIcon></CloseIcon>
      </div>

      <Information setShow={setShow}></Information>
    </EditInfoContainerStyled>
  );
};

export default EditInfo;

EditInfo.propTypes = {
  setShow: propTypes.func,
};
