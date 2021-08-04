import * as React from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";

import { rows } from "./data";

export const FlightDetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const data = rows.find((el) => el.id === Number(id));

  console.log("pathname", pathname);
  console.log("rows", rows);
  console.log("id", id);
  console.log("data", data);
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
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};
