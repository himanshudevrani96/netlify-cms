// Routing.js
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../shared/components/Layout";
import { SpinnerContainer } from "../shared/styles/GlobalStyles";
import NotFoundComponent from "../shared/components/NotFound";

const StakingList = lazy(() => import("../modules/staking/StakingList"));
const StakeInfo = lazy(() => import("../modules/staking/StakeInfo"));
const HumanitarianList = lazy(
  () => import("../modules/HumanitarianActivity/HumanitarianActivityList")
);

function Routing() {
  const FallbackSpinner = () => (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <SpinnerContainer width="50px" />
    </div>
  );

  return (
    <Suspense fallback={<FallbackSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/stake" />} />
          <Route path="/stake" element={<StakingList />} />
          <Route path="/stake-info" element={<StakeInfo />} />
          <Route path="/humanitarian-list" element={<HumanitarianList />} />
        </Route>
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
