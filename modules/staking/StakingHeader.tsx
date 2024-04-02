import { BgImageCommon, BoldCommon, H1Common, ContentWrapperCommon, H6Common1, H6Common2, ContentWrapperCommon2, BoldCommon2, Bold2Common } from "../../shared/components/common.style";
import ParallelDiv from "../../shared/components/ParallelDiv";
import HeroComponent from "../../shared/heroComponent/HeroComponent";
import { SubContent, SubHeading } from "../../shared/styles/sharedStyle";
import { Container } from "../BuyKaldicoin/buyKaldicoin.style";
export default function HeaderStaking() {
  const title = "Staking";
  const description = "Internet connectivity for smallholder farmers is a matter of survival";
  const body = (
    <>
      Staking your Kaldicoin contributes to providing internet connectivity for smallholder coffee farmers. You also will earn rewards and help shape the future of coffee. A one-off payment of $10
      must be made before staking, and a minimum of 100 Kaldicoin must be staked. Your $10 goes towards providing coffee farmers with high-speed internet connectivity.
    </>
  );

  return (      
      
      <ContentWrapperCommon2>
        <SubHeading padding="10px 0px">Internet connectivity for smallholder farmers is a matter of survival.</SubHeading>
        <SubContent>
          Staking your Kaldicoin contributes to providing internet connectivity for smallholder coffee farmers. You also will earn rewards and help shape the future of coffee. A one-off payment of $10
          must be made before staking, and a minimum of 100 Kaldicoin must be staked. Your $10 goes towards providing coffee farmers with high-speed internet connectivity.
        </SubContent>
        <br></br>
        <SubHeading>It starts with coffee.</SubHeading>
        <br></br>
        <SubContent>
          A lack of internet access impacts the ability of smallholder farmers to access global markets and engage with modern agricultural practices and technologies. Younger people are leaving the
          farms because of a lack of quality of life, starting with internet connectivity, jeopardizing the future of smallholder coffee farming. For smallholder farmers to achieve the best prices,
          they need transparent market access. 
        </SubContent>
        <br></br>
        <SubHeading>It matters, and it needs to change.</SubHeading>
      </ContentWrapperCommon2>
      
  );
}
