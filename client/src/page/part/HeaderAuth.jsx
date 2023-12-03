import PropTypes from "prop-types";
import styled from "styled-components";
const HeaderAuthStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  color: white;
  h1 {
    font-weight: 900;
    @media (max-width: 46.1875em) {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
    }
  }
  span {
    font-weight: 500;
    @media (max-width: 46.1875em) {
      text-align: center;
      padding: 0 15px;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
    }
  }
`;

const HeaderAuth = ({ title, desc }) => {
  return (
    <HeaderAuthStyled>
      <h1 className="md:text-heding1Black">{title}</h1>
      <span className="md:text-displayBold">{desc}</span>
    </HeaderAuthStyled>
  );
};

export default HeaderAuth;

HeaderAuth.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
