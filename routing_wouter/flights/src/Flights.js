import * as React from "react";
import { Route, Router } from "wouter";

import { FlightsList } from "./FlightsList";
import { FlightDetails } from "./FlightDetails";

function Flights(props) {
  return (
    // CASE-4
    <Router base={props.path} key="flights">
      <Route path={`/`}>
        <FlightsList base={props.path} />
      </Route>
      <Route path={`/:id`}>
        {/* CASE-9 */}
        {(params) => <FlightDetails base={props.path} id={params.id} />}
      </Route>
    </Router>
  );
}

export default Flights;
