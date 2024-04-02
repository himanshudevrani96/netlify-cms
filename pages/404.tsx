import React from 'react'
import styled from 'styled-components'
// import { NotFoundIcon } from '../shared/images'
// import ColorHeading from '../shared/components/colorHeading/ColorHeading'
// import SubHeading from '../shared/components/subHeading/SubHeading'
import Image from 'next/image'
import { screenSizes } from '../shared/styles/theme'
// import { ModifiedContainer } from '../styles/sharedStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
`
export const NotFoundImage = styled(Image)`
  height: 100px;
  width: 180px;
  margin-bottom: 40px;
  /* @media (min-width: ${screenSizes.mediaS}px) {
    height: 122px;
    width: 200px;
  } */
`

const NotFound = () => {
  return (
    <>
    not found
    </>
    // <ModifiedContainer>
    //   <Container>
    //     <NotFoundImage src={NotFoundIcon} alt="Not Found" />
    //     <ColorHeading fontSize="36px" lineHeight="58px" fontSizeS="26px" fontSizeL="32px">
    //       Page not found
    //     </ColorHeading>
    //     <SubHeading style={{ maxWidth: '90%' }} fontSize="24px" fontSizeS="18px" fontSizeL="20px">
    //       Unfortunately, the page was unable to be found. Please try again.
    //     </SubHeading>
    //   </Container>
    // </ModifiedContainer>
  )
}

export default NotFound
