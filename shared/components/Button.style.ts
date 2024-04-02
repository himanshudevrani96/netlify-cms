import styled  from "styled-components";

interface Props {
  variant?: "contained" | "outlined" | "link" | "background";
  size?: "lg" | "md" | "sm";
  color?: "primary" | "secondary" | "error" | "success" | "warning" | "accent";
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  loader?: boolean; // New prop for loader
  border?: string;
  minWidth?: string;
  weight?: string;
}

const Button = styled.button<Props>`
  cursor: pointer !important;
  border-radius: ${(props) => props.border || "8px"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0px 24px"};
  min-width: ${(props) => props.minWidth || ""};
  font-weight: ${(props) => props.weight || "500"};
  background: ${(props) => {
    switch (props.variant) {
      case "link":
        return "transparent";
      case "outlined":
        return "transparent";
      case "background":
        return props.theme.gradientForStaking;
      default:
        return props.theme.accentColor;
    }
  }};
  font-size: ${(props) => {
    switch (props.variant) {
      case "link":
        return "13px";
      default:
        return "14px";
    }
  }};
  border: ${(props) => {
    switch (props.variant) {
      case "link":
        return 0;
      case "outlined":
        return `1.5px solid ${props.theme.stroke}`;
      default:
        return 0;
    }
  }};
  box-shadow: none;
  color: ${(props) => {
    switch (props.color) {
      case "accent":
        return props.theme.accentColor;
      case "error":
        return props.theme.error;
      case "secondary":
        return props.theme.black;
      default:
        return props.theme.black;
    }
  }};
  height: ${(props) => props.height || "56px"};
  margin: ${(props) => props.margin || "0px"};
  font-family: ${(props) => {
    switch (props.variant) {
      case "link":
        return "SuisseLight";
      case "outlined":
        return "NeueHaasRegular";
      default:
        return "NeueHaasRegular";
    }
  }};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${(props) => {
      switch (props.color) {
        case "accent":
          return props.theme.accentColor;
        case "error":
          return props.theme.error;
        default:
          return "white";
      }
    }};
    font-size: ${(props) => {
      switch (props.variant) {
        case "link":
          return "13px";
        case "outlined":
          return "14px";
        default:
          return "16px";
      }
    }};
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${(props) => (Boolean(props.loader) ? "block" : "none")};
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 50%;
    border-top: 2px solid #000;
    animation: spin 1s linear infinite;
  }

  span {
    visibility: ${(props) => (Boolean(props.loader) ? "hidden" : "visible")};
  }
  &:hover {
    background: ${(props) => {
      switch (props.variant) {
        case "link":
          return "transparent";
        case "outlined":
          return "transparent";
        case "background":
          return props.theme.gradientForStaking;
        default:
          return  "#25C1A4";
      }
    }};
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Button;
