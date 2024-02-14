import {
  Img,
  StakingListHeader,
  TierRatesAndFees,
  Tier,
  WrapperDiv,
  CustomLink,
} from "./Stake.style";
import HeaderStaking from "./StakingHeader";
import RightBarStaking from "./RightBarStaking";
import { H4, P1, P3 } from "../../shared/components/Text.style";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

import stakeList from "../../stake.json";
export default function StakingList() {
  return (
    <>
      <HeaderStaking />
      <section className="ml-50">
        <Box sx={{ flexGrow: 1 }} className="mt-12">
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={5}
                justifyContent="center"
              >
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Grid item xs={12}>
                    <Item>
                      <WrapperDiv>
                        <StakingListHeader className="ml-20">
                          <H4>Your Staked Kaldi</H4>
                          <H4 textalign="right" className="mr-30">
                            56,890 Kaldi
                          </H4>
                        </StakingListHeader>
                        <StakingListHeader>
                          <P1 className="ml-20">Earn KALDI & More KALDI!</P1>
                          <P1 textalign="right" className="mr-10">
                            APY
                            <Img
                              loading="lazy"
                              src="src/assets/images/SVG.png"
                            />
                          </P1>
                        </StakingListHeader>
                      </WrapperDiv>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                          <Grid container justifyContent="center" spacing={2}>
                            <>
                              {stakeList.map((item, index) => (
                                <CustomLink
                                  to={"/stake-info"}
                                  key={index + 1}
                                  className="mt-12 ml-10"
                                >
                                  <Tier className="p-2 ml-1">
                                    <P1
                                      className="mt-10 ml-10 font-20"
                                      style={{ fontWeight: "700" }}
                                    >
                                      {item.title}
                                    </P1>
                                    <P1 className="mt-5 ml-1">
                                      {item.description}
                                    </P1>
                                    <TierRatesAndFees className="mt-20 ml-20">
                                      <P1 className="font-12">
                                        Locked Period{" "}
                                      </P1>
                                      <P1 className="font-12 fontSuisseBold">
                                        {item.locked_period}
                                      </P1>
                                    </TierRatesAndFees>
                                    <TierRatesAndFees className="mt-10 ml-20">
                                      <P1 className="font-12">Reward Rate </P1>
                                      <P1 className="font-12 fontSuisseBold">
                                        {item.reward_rate}
                                      </P1>
                                    </TierRatesAndFees>
                                    <TierRatesAndFees className="mt-10 ml-20">
                                      <P1 className="font-12">
                                        Early Exit Reward Fee{" "}
                                      </P1>
                                      <P1 className="font-12 fontSuisseBold">
                                        {item.early_exit_reward_fee}
                                      </P1>
                                    </TierRatesAndFees>
                                    <TierRatesAndFees className="mt-10 ml-20">
                                      <P1 className="font-12">
                                        Early Exit Fee{" "}
                                      </P1>
                                      <P1 className="font-12 fontSuisseBold">
                                        {item.early_exit_fee}
                                      </P1>
                                    </TierRatesAndFees>
                                  </Tier>
                                </CustomLink>
                              ))}
                            </>
                          </Grid>
                          <br />
                          <P3 className="ml-12 mt-12">
                            KALDI in wallet: ($0.00)
                          </P3>
                        </Grid>
                      </Grid>
                    </Item>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <Grid item xs={12}>
                    <Item sx={{ height: 500 }}>
                      <RightBarStaking />
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
}
