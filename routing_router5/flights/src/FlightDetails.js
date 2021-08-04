import * as React from "react";
import { useRouteNode } from "react-router5";

import { rows } from "./data";

export const FlightDetails = () => {
  const { router, route } = useRouteNode("flights");
  const topRouteName = route.name.split(".")[0];
  const { id } = route.params;
  const data = rows.find((el) => el.id === id);

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
      <button
        onClick={() => router.navigate(`${topRouteName}`, {}, { reload: true })}
      >
        Go Back
      </button>
    </div>
  );
};
