import styled from "styled-components";
import { lightTheme } from "../../shared/styles/theme";


export const ContentBox = styled.div`
  /* height: 800px; */
  width: 600px;
  border-left: 1px solid;
  margin: auto;
  margin: 50px, 0 , 50px, 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`
export const SubContent = styled.div`
  /* height: 200px; */
  width: 80px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  position: relative;
`

export const DateBox = styled.div`
  position: absolute;
  padding: 12px;
  background: ${lightTheme.accentColor};
  top: -25px;
  right: -70px;
  border-radius: 8px;
`
export const ContentWrapper = styled.div`
  position: relative;
  width: 800px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 40px;
  gap: 8px;
`
export const CircleDot = styled.div`
 position: absolute;
 top: -12px;
 left: -12px;
`
export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
  grid-gap: 10px;
`
export const Image = styled.img`
  border-radius: 8px;
`