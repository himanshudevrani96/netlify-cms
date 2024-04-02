// Layout.js
import { Outlet } from "react-router-dom";
import { OutletDiv } from "../styles/GlobalStyles";

function Layout() {
  return (
    <OutletDiv>
      <Outlet />
    </OutletDiv>  
  );
}

export default Layout;
