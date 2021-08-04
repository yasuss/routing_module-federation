import * as React from "react";

import Timer from "./Timer";
import Widget from "./Widget";

const FlightsService = React.lazy(() => import("flights/FlightsList"));

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
      {/* CASE-5 */}
      <FlightsWidget />
    </div>
  );
}
