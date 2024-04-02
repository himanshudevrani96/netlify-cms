import styled from "styled-components";
interface Props {
  padding?: string;
  margin?: string;
  color?: string;
  textalign?: string;
  fontSize?: string;
  weight?: "bold" | "semibold" | "medium" | "regular" | string;
  lineheight?: string;
  fontFamily?: string;
}

export const H1 = styled.h1<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.weight || ""};
  text-align: ${(props) => props.textalign || "left"};
`;

export const H2 = styled.h2<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || null};
  font-family: ${(props) => props.weight || ""};
  text-align: ${(props) => props.textalign || "left"};
`;

export const H3 = styled.h3<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.weight || ""};
  text-align: ${(props) => props.textalign || "left"};
`;

export const H4 = styled.h4<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.fontFamily || "NeueHaasRegular"};
  text-align: ${(props) => props.textalign || "left"};
`;

export const H5 = styled.h5<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.fontFamily || "NeueHaasRegular"};
  text-align: ${(props) => props.textalign || "left"};
`;

export const H6 = styled.h6<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.fontFamily || "NeueHaasRegular"};
  text-align: ${(props) => props.textalign || "left"};
`;

export const P1 = styled.p<Props>`
  font-family: ${(props) => props.fontFamily || "NeueHaasRegular"};
  font-size: ${(props) => props.fontSize || "12px"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight || ""};
  text-align: ${(props) => props.textalign || "left"};
  line-height: ${(props) => props.lineheight || "20px"};
`;

export const P2 = styled.p<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.fontFamily || "NeueHaasRegular"};
  text-align: ${(props) => props.textalign || "left"};
`;

export const P3 = styled.p<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.fontFamily || "NeueHaasRegular"};
  text-align: ${(props) => props.textalign || "left"};
`;

export const P4 = styled.p<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.fontFamily || "NeueHaasRegular"};
  text-align: ${(props) => props.textalign || "left"};
`;

export const P5 = styled.p<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.weight || ""};
  text-align: ${(props) => props.textalign || "left"};
`;

export const P6 = styled.p<Props>`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
  font-family: ${(props) => props.weight || ""};
  text-align: ${(props) => props.textalign || "left"};
`;

export const Label = styled.label<Props>`
  font-size: ${(props) => props.fontSize};
  font-family: "";
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.theme.primaryText || "black"};
`;
