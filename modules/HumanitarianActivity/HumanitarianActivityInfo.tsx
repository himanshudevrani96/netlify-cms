import React from "react";
// import circleDot from "../../public/assets/images/ellipseCircle.svg";
// import demo from "../../public/assets/images/humanitarian.svg";
import { H1, H3 } from "../../shared/components/Text.style";
import { CircleDot, ContentBox, ContentWrapper, DateBox, Image, ImageWrapper, SubContent } from "./humanatarian.style";
// Extend the Window interface to include the Browser property
interface CustomWindow extends Window {
  Browser?: {
    T?: () => void;
  };
}
export const HumanitarianActicity: any = () => {
  return (
    <ContentBox>
      <SubContent>
        <DateBox>12/12/12</DateBox>
        <ContentWrapper>
          <CircleDot>
            {/* <Image src={circleDot} alt="" /> */}
          </CircleDot>
          <H3>Content</H3>
          <H1>SubContent</H1>
          <ImageWrapper>
            {/*             {/* <Image src={demo} alt="demo" /> */} 
                        {/* <Image src={demo} alt="demo" /> */}
                        {/* <Image src={demo} alt="demo" /> */}
                        {/* <Image src={demo} alt="demo" /> */}
          </ImageWrapper>
        </ContentWrapper>
      </SubContent>
      <SubContent>
        <DateBox>12/12/12</DateBox>
        <ContentWrapper>
          <CircleDot>
            {/* {/* <Image src={circleDot} alt="" /> */} 
          </CircleDot>
          <H3>Content</H3>
          <H1>SubContent</H1>
          <ImageWrapper>
                        {/* <Image src={demo} alt="demo" /> */}
                        {/* <Image src={demo} alt="demo" /> */}
          </ImageWrapper>
        </ContentWrapper>
      </SubContent>
      <SubContent>
        <DateBox>12/12/12</DateBox>
        <ContentWrapper>
          <CircleDot>
            {/* <Image src={circleDot} alt="" /> */}
          </CircleDot>
          <H3>Content</H3>
          <H1>SubContent</H1>
          <ImageWrapper>
                        {/* <Image src={demo} alt="demo" /> */}
                        {/* <Image src={demo} alt="demo" /> */}
          </ImageWrapper>
        </ContentWrapper>
      </SubContent>
      <SubContent>
        <DateBox>12/12/12</DateBox>
        <ContentWrapper>
          <CircleDot>
            {/* <Image src={circleDot} alt="" /> */}
          </CircleDot>
          <H3>Content</H3>
          <H1>SubContent</H1>
          <ImageWrapper>
                        {/* <Image src={demo} alt="demo" /> */}
                        {/* <Image src={demo} alt="demo" /> */}
          </ImageWrapper>
        </ContentWrapper>
      </SubContent>
    </ContentBox>
  );
};
