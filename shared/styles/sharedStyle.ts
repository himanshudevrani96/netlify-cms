import styled from "styled-components";

interface SubHeadingProps {
  padding?: string;
}

interface ContentHeadingProps {
  padding?: string;
}

export const SubHeading = styled.div<SubHeadingProps>`
  color: ${({ theme }) => theme.primaryText};
  padding: ${({ padding }) => (padding ? padding : "")};
  font-family:"NeueHaasRegular";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  max-width: 964px;
`;

export const SubContent = styled.div`
  color: ${({ theme }) => theme.lightGrey};
  font-family:"NeueHaasRegular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  max-width: 964px;
`;

export const ContentHeading = styled.div<ContentHeadingProps>`
  color: ${({ theme }) => theme.primaryText};
  font-family:"NeueHaasRegular";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
   padding: ${({ padding }) => (padding ? padding : "")};
`;
