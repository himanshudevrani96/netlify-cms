import HeroComponent from "../../shared/heroComponent/HeroComponent";
import { HumanitarianActicity } from "./HumanitarianActivityInfo";

function AutoGrid() {
  const title = <>Internet Connectivity</>;
  const description = "Get Farmers Online. Harvest Rewards. Shape the future of coffee.";
  const body = (
    <>
      KALDICOIN is coffee’s digital currency. It has been created to harness the vast global coffee market. Over 2 billion <br></br> cups of coffee are drunk every day.  Globally, over 3 billion
      people are still not connected to the internet, leaving them <br></br>locked out of the digital economy. It matters, and it needs to change.
    </>
  );
  return (
    <>
      <>
        <HeroComponent title={title} description={description} body={body} />
        <HumanitarianActicity />
      </>
    </>
  );
}

export default AutoGrid;
