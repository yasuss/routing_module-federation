import * as React from "react";
import { useRouter, Router, Route } from "wouter";

import Timer from "./Timer";
import Widget from "./Widget";

const FlightsService = React.lazy(() => import("flights/Flights"));

const TimerWidgett = () => (
  <Widget height="100px" width="30%">
    <Timer />
  </Widget>
);

const FlightsWidget = ({ path }) => {
  return (
    <Widget height="200px">
      <FlightsService path={path} />
    </Widget>
  );
};

export default function DashboardService(props) {
  const router = useRouter();
  const nestedBase = `${router.base}${props.path}`;

  return (
    // CASE-5
    <Router base={props.path} key={nestedBase}>
      <Route path="/">
        <div>
          <TimerWidgett />
          <div style={{ marginBottom: 20 }} />
          <FlightsWidget path={nestedBase} />
        </div>
      </Route>
    </Router>
  );
}
