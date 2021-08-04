import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { rows } from "./data";

export const FlightDetails = () => {
  const navigate = useNavigate();
  // CASE-9
  const { id } = useParams();
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
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};
