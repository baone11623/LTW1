import styled from "styled-components";
const LoaderStyled = styled.div`
  & .stroke {
    display: block;
    background-color: #f1f1f1;
    /* position: relative; */
    height: 100%;
    width: 5px;
    border-radius: 50px;
    margin: 0 2px;
    transform-origin: center;
    animation: animate 1.2s linear infinite;

    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
    &:nth-child(4) {
      animation-delay: 0.9s;
    }
    &:nth-child(5) {
      animation-delay: 0.6s;
    }
    &:nth-child(6) {
      animation-delay: 0.3s;
    }
    &:nth-child(7) {
      animation-delay: 0s;
    }
  }

  @keyframes animate {
    20% {
      height: 20%;
    }
    50% {
      height: 20%;
    }
    100% {
      height: 100%;
    }
  }
`;
const WaveLoading = () => {
  return (
    <LoaderStyled className="flex items-center justify-center h-[30px]">
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
    </LoaderStyled>
  );
};

export default WaveLoading;
