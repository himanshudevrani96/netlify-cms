import { BgImage, ContentWrapper } from "../staking/Stake.style";
import { HumanitarianActicity } from "./HumanitarianActivityInfo";

function AutoGrid() {
  return (
    <>
      <>
        <BgImage style={{marginBottom: '50px'}}>
          <ContentWrapper>
            <h1 className="fontSuisseBold font-30" style={{ color: "white" }}>
              Internet Connectivity
            </h1>
            <h6 style={{ color: "white" }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum</h6>
          </ContentWrapper>
        </BgImage>
        <HumanitarianActicity/>
      </>
    </>
  );
}

export default AutoGrid;
