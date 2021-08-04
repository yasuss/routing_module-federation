import * as React from "react";
import { getRouter, useNavigo } from "navigo-react";

import { rows } from "./data";

const FlightDetails = () => {
  const { match } = useNavigo();
  // CASE-9
  const id = match.data ? match.data.id : 1;
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
      {/* CASE-8 */}
      <button onClick={() => getRouter().navigateByName("flights")}>
        Go Back
      </button>
    </div>
  );
};

export default FlightDetails;
