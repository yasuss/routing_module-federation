import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

import { rows } from "./data";

export const FlightsList = () => {
  const navigate = useNavigate();
  console.log("navigate", navigate);

  const handleClick = (event, id) => {
    console.log("id", id);
    console.log("navigate", navigate);
    navigate(`${id}`);
  };

  return (
    <Table>
      <TableHead>
        <TableCell>Date and time</TableCell>
        <TableCell>Flight number</TableCell>
        <TableCell>Departure airport</TableCell>
        <TableCell>Status</TableCell>
      </TableHead>

      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            onClick={(event) => handleClick(event, row.id)}
          >
            <TableCell component="th" scope="row">
              {row.date}
            </TableCell>
            <TableCell align="right">{row.number}</TableCell>
            <TableCell align="right">{row.airport}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
