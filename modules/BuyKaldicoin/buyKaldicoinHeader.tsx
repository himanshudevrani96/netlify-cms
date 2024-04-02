import styled, { useTheme } from "styled-components"
import {
  BgImageCommon, H1Common, H6Common1
} from "../../shared/components/common.style"

export default function BuyKaldiHeader() {
  const theme = useTheme()

  return (
    <BgImageCommon>
      <ContentWrapper>
        <H1Common>
          KALDICOIN: Coffee’s<br></br> Digital Currency
        </H1Common>

        <Future>
          Get Farmers Online. Harvest Rewards. Shape the future of coffee.
        </Future>

        <H6Common1>
          KALDICOIN is coffee’s digital currency. It has been created to harness
          the vast global coffee market. Over 2 billion <br></br> cups of coffee
          are drunk every day.  Globally, over 3 billion people are still not
          connected to the internet, leaving them <br></br>locked out of the
          digital economy. It matters, and it needs to change.
        </H6Common1>
      </ContentWrapper>
    </BgImageCommon>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 170px;
  gap: 24px;
`

const Future = styled.h4`
  font-family: "NeueHaas";
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`
