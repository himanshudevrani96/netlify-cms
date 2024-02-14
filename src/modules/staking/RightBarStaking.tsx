import { RightSideBar, ImgDownload, WapperRightBar } from "../staking/Stake.style";
import { H3, P1 } from "../../shared/components/Text.style";
import Grid from "@mui/material/Grid";

export default function RightBarStaking() {
  return (
    <>
      <div>
        <RightSideBar>
          <P1>Portfolio Statistics</P1>
          <WapperRightBar>
            <Grid container className="ml-20 mt-10">
              <Grid item xs={12} className="p-12">
                <P1 className="font-12">
                  Total Skated
                  <br />
                  <a className="font-14">$75,000</a>
                </P1>
                <P1 className="font-12">
                  Total Earned
                  <br />
                  <a className="font-14">$75,000</a>
                </P1>
                <P1 className="font-12">
                  Rewards Unclaimed <br />
                  <a className="font-14">$75,000</a>
                </P1>
              </Grid>
            </Grid>
          </WapperRightBar>

          <WapperRightBar className="mt-20">
            <Grid container className="ml-20 mt-10">
              <Grid item xs={12}>
                <H3 className="font-16">
                  Staking Rewards{" "}
                  <ImgDownload
                    className="ml-100"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/da930b4c6dee7ce06b1fbd91213c4f06b362842a9a82c4b2326eae17823f6119?apiKey=5b4a4e69c7f546538c34344a01a363c8&"
                  />
                </H3>
                <br />
                <P1 className="font-13" style={{ color: "#808191", lineHeight: "20px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et
                  <br /> dolore magna aliqua. Ut enim ad minim veniam, quis
                  <br /> nostrud exercitation ullamco laboris nisi ut.
                  <br />
                </P1>
                <br />
                <H3 className="font-16">Kaldi Compounder : </H3>
                <P1 className="font-13 mb-12" style={{ color: "#808191", lineHeight: "20px" }}>
                  automatically turn your USD earnings
                  <br /> into more KAL.
                </P1>
              </Grid>
            </Grid>
          </WapperRightBar>
        </RightSideBar>
      </div>
    </>
  );
}
