import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { FlightsList } from "./FlightsList";
import { FlightDetails } from "./FlightDetails";

function Flights() {
  return (
    <div>
      <Routes>
        <Route path="/:id" element={<FlightDetails />} />
        <Route patgh="/" element={<FlightsList />} />
      </Routes>
    </div>
  );
}

export default Flights;
