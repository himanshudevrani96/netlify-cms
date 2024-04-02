import styled from "styled-components";
import { screenSizes } from "../styles/theme";

// Styled component for the parallel div
export const StyledParallelDiv = styled.div`
  width: 106vw;
  height: 350px;
  background: ${({ theme }) => theme?.gradientParallel};
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(6deg);
  z-index: 1;

  @media (max-width: ${screenSizes.md}px) {
    top: 13%;
    height: 200px;
  }

  @media (max-width: ${screenSizes.sx}px) {
    top: 10%;
    height: 80px;
  }
`;

const ParallelDiv: any = () => {
  return <StyledParallelDiv />; // Return null as this component doesn't render anything in React tree
};

export default ParallelDiv;
