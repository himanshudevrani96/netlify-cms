import styleds from "styled-components";
import logo from "../../assets/images/logo.png";
import Button from "./Button.style";
import { Link } from "react-router-dom";
import Wallets from "../popups/wallets";
import { useEffect, useState } from "react";
import { eagerConnection } from "../../wallets/helpers/EagerConnect";
import Modal from "../../shared/components/Modal";
// import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import { useWeb3React } from "@web3-react/core";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Header() {
  const { account } = useWeb3React();
  const address = localStorage.getItem("wallet");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let address = localStorage.getItem("address");
    if (!account && address) {
      eagerConnection();
    }
  }, [account]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // xs = -600
  // sm = 600 - 900
  // md = 900 - 1200
  // lg = 1200 +
  return (
    <Box sx={{ flexGrow: 1 }} className="mt-12">
      <Grid container direction="row" alignItems="center" spacing={5} justifyContent="center">
        <Grid item xs={6} sm={12} md={2} lg={2}>
          <img src={logo} alt="Kaldi" />
        </Grid>
        <Grid item xs={8} sm={12} md={6} lg={6}>
          <MenuWrapper>
            <Menu style={{ alignItems: "left" }}>
              <CustomLink to={"/stake"}>Staking</CustomLink>
              <CustomLink to={"/humanitarian-list"} className="ml-12">
                Humanitarian Activity
              </CustomLink>
            </Menu>
          </MenuWrapper>
        </Grid>
        <Grid item xs={8} sm={12} md={2} lg={2}>
          <Button width="100%" onClick={openModal} className="mb-10">
            {address ? "Connected" : "Connect Wallet"}
          </Button>
          <Modal onClose={closeModal} showModal={isModalOpen} heading={address ? "Connected" : "Wallet Connect"} isFooter={false} width="30%" height="50%">
            <Wallets />
          </Modal>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;

const MenuWrapper = styleds.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
`;

const Menu = styleds.div`
  color: var(--primary, #11142d);
  white-space: nowrap;
  font: 500 14px/24px Neue Haas Grotesk Display Pro, -apple-system, Roboto, Helvetica, sans-serif;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const CustomLink = styleds(Link)`
  text-decoration: none;
  color: inherit;
`;
