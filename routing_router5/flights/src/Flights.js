import * as React from "react";
import { useRouteNode } from "react-router5";

import { FlightsList } from "./FlightsList";
import { FlightDetails } from "./FlightDetails";

function Flights() {
  const { route } = useRouteNode("flights");
  const secondRouteName = route.name.split(".")[1];

  switch (secondRouteName) {
    case "details":
      return <FlightDetails />;
    default:
      return <FlightsList />;
  }
}

export default Flights;
