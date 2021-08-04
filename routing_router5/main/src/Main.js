import React from "react";
import { Divider } from "@material-ui/core";
import { useRouteNode, useRoute } from "react-router5";

import { Menu } from "./Menu";
import { Page404 } from "./Page404";
import { RedirectPage } from "./RedirectPage";
import { Home } from "./Home";

const FlightsService = React.lazy(() => import("flights/Flights"));
const DashboardService = React.lazy(() => import("dashboard/DashboardService"));

const Page = () => {
  const { route } = useRouteNode("");
  const topRouteName = route.name.split(".")[0];

  switch (topRouteName) {
    case "home":
      return <Home />;
    case "dashboard":
      return <DashboardService />;
    case "flights":
      return <FlightsService />;
    case "redirect":
      return <RedirectPage />;
    case "404":
      return <Page404 />;
    default:
      return <Page404 />;
  }
};

const Main = () => {
  return (
    <div>
      <Menu />
      <Divider />
      <div style={{ marginBottom: 20 }} />

      <React.Suspense fallback={"Loading"}>
        <Page />
      </React.Suspense>
    </div>
  );
};

export default Main;
