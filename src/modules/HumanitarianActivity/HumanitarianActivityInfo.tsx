import { H1, H2, H3 } from "../../shared/components/Text.style";
import {
  CircleDot,
  ContentBox,
  ContentWrapper,
  DateBox,
  Image,
  ImageWrapper,
  SubContent,
} from "./humanatarian.style";
import demo from "../../assets/images/humanitarian.svg";
import circleDot from "../../assets/images/ellipseCircle.svg";

import humanitarianList from "../../humanitarian.json";
export const HumanitarianActicity = () => {
  return (
    <ContentBox style={{ marginBottom: "50px" }}>
      {humanitarianList?.map((item:any) => {
        return (
          <SubContent>
            <DateBox>{item?.date}</DateBox>
            <ContentWrapper>
              <CircleDot>
                <Image src={circleDot} alt="" />
              </CircleDot>
              <H3>{item?.title}</H3>
              <H1>{item?.description}</H1>
              <ImageWrapper>
                {item?.humaitarian_images.map((items) => {
                  return (
                    <Image src={items?.image || demo} alt="demo" />
                  );
                })}
                {/* 
              <Image src={demo} alt="demo" />
              <Image src={demo} alt="demo" /> */}
                {/* <Image src={demo} alt='demo'/> */}
              </ImageWrapper>
            </ContentWrapper>
          </SubContent>
        );
      })}
    </ContentBox>
  );
};
