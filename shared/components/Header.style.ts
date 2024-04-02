import Link from 'next/link';
import styled from "styled-components";
import { screenSizes } from "../styles/theme";
import Image from 'next/image';

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
`;

export const MenuWrapper = styled.div`
  display: flex;
  background-color: #0e120e;
  width: 100%;
  border-bottom: 1px solid #32373c;
  height: 72px;
  position: sticky;
  top: 0;
  /* z-index: 12; */
  z-index: 100;
`;

export const Menus = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  flex-grow: 1;

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 950px) {
    gap: 15px;
  }
`;

export const CustomLink = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  font-family: "NeueHaas";
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #f3f4fb;
  border-bottom: 1px solid ${({ active }) => (active ? "#808191" : "transparent")};

  &:hover {
    border-bottom: 1px solid #f3f4fb;
  }
`;

export const CustomLinkMobile = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CustomLinkLogo = styled(CustomLink)<any>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  margin-right: 80px;
  margin-left: 72px;
  border-bottom: none;

  &:hover {
    border-bottom: none;
  }

  @media (max-width: 1150px) {
    margin-right: 50px;
    margin-left: 50px;
  }

  @media (max-width: 1060px) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media (max-width: 1000px) {
    margin-right: 20px;
    margin-left: 20px;
  }

  @media (max-width: 900px) {
    margin-right: 10px;
    margin-left: 10px;
  }

  img {
    @media (max-width: ${screenSizes.s}px) {
      width: 100px;
    }
  }
`;

export const RightNav = styled.div`
  gap: 20px;
  justify-self: flex-end;
  justify-content: flex-end;
  padding-right: 72px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  height: fit-content;
  align-self: center;
  align-items: center;

  @media (max-width: 1150px) {
    padding-right: 50px;
  }

  @media (max-width: 1060px) {
    padding-right: 30px;
  }

  @media (max-width: 1000px) {
    padding-right: 20px;
    gap: 10px;
  }

  @media (max-width: 900px) {
    padding-right: 10px;
    gap: 10px;
  }
`;

export const AddressDiv = styled.div`
  position: relative;
  display: inline-block;

  p {
    color: transparent;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0px;
    border-radius: 4px;
    font-size: 12px;
  }

  &:hover {
    p {
      color: #cecece;
    }
  }
`;

export const LogoutImage = styled(Image)<any>`
  height: 30px;
  color: white;
  cursor: pointer;
`;
