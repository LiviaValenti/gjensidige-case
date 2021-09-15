import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return <StyledSpinner><img src={"/images/ball.svg"} alt={"Loading..."} /></StyledSpinner>;
};

export default Spinner;

const SpinnerAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(359deg);
}
`

const StyledSpinner = styled.div`
  width: 100px;
  animation: ${SpinnerAnimation} 2s infinite linear;
`;
