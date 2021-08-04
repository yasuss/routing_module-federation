import React from "react";

const FlightsList = React.lazy(() => import("./FlightsList"));
const FlightDetails = React.lazy(() => import("./FlightDetails"));

export default [
  {
    path: "/flights",
    name: "flights",
    element: <FlightsList />,
  },
  {
    path: "/flights/:id",
    name: "flights_details",
    element: <FlightDetails />,
  },
];
