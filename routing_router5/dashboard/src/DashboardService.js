import * as React from "react";
import { makeStyles, Paper } from "@material-ui/core";

import Timer from "./Timer";
import Widget from "./Widget";

const FlightsService = React.lazy(() => import("flights/Flights"));

const TimerWidgett = () => (
  <Widget height="100px" width="30%">
    <Timer />
  </Widget>
);

const FlightsWidget = () => (
  <Widget height="200px">
    <FlightsService />
  </Widget>
);

export default function DashboardService() {
  return (
    <div>
      <TimerWidgett />
      <div style={{ marginBottom: 20 }} />
      <FlightsWidget />
    </div>
  );
}
