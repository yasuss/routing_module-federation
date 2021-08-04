import * as React from "react";
import { useLocation } from "wouter";

import { rows } from "./data";

export const FlightDetails = ({ id }) => {
  const [location, setLocation] = useLocation();
  const data = rows.find((el) => el.id === Number(id));

  return (
    <div>
      <h2>{`Info Flight № ${id}`}</h2>
      <div>
        <div>
          <div>Date and time</div>
          <div>{data.date}</div>
        </div>
        <div>
          <div>Flight number</div>
          <div>{data.number}</div>
        </div>
        <div>
          <div>Departure airport</div>
          <div>{data.airport}</div>
        </div>
        <div>
          <div>Status</div>
          <div>{data.status}</div>
        </div>
      </div>
      <button onClick={() => setLocation("")}>Go Back</button>
    </div>
  );
};
