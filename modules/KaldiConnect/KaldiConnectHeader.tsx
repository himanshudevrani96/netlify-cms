import ParallelDiv from "../../shared/components/ParallelDiv";
import { BgImageCommon, BoldCommon, BoldCommon2, H1Common, ContentWrapperCommon, H6Common1, H6Common2, Bold2Common, ContentWrapperCommon2 } from "../../shared/components/common.style";
import HeroComponent from "../../shared/heroComponent/HeroComponent";
export default function KaldiConnectHeader() {
  const title = <>KaldiConnect</>;
  const description = "Get Farmers Online. Harvest Rewards. Shape the future of coffee.";
  const body = (
    <>
      KALDICOIN is coffee’s digital currency. It has been created to harness the vast global coffee market. Over 2 billion <br></br> cups of coffee are drunk every day.  Globally, over 3 billion
      people are still not connected to the internet, leaving them <br></br>locked out of the digital economy. It matters, and it needs to change.
    </>
  );
  return (
    <>
      <HeroComponent title={title} description={description} body={body} />
      <ParallelDiv />
      {/* <BgImageCommon>
        <ContentWrapperCommon>
          <H1Common>KaldiConnect</H1Common>
          <H6Common1>
            <BoldCommon>Get Farmers Online. Harvest Rewards. Shape the future of coffee.</BoldCommon>
            <br></br>
            <br></br>
            KALDICOIN is coffee’s digital currency. It has been created to harness the vast global coffee market. Over 2 billion<br></br> cups of coffee are drunk every day.  Globally, over 3 billion
            people are still not connected to the internet, leaving<br></br> them locked out of the digital economy. It matters, and it needs to change.
          </H6Common1>
          <br></br>
        </ContentWrapperCommon>
      </BgImageCommon> */}
    </>
  );
}
