import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NotFoundPageStyles = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #191c21;
  color: white;
  .page-content {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
    @media (max-width: 46.1875em) {
      font-size: 50px;
      line-height: 50px;
    }
  }
  .description {
    max-width: 800px;
    margin: 0 auto 40px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-image: linear-gradient(219deg, #b92b27, #1565c0);
    border-radius: 8px;
    font-weight: 500;
  }
  .image {
    max-width: 250px;
    margin: 0 auto 40px;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <div className="page-content">
        <img src="/404.png" alt="notfound" className="image" />
        <h1 className="heading">{"404 - Looks like you're lost."}</h1>
        <p className="description">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
        <NavLink to="/" className="back">
          Back to home
        </NavLink>
      </div>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
