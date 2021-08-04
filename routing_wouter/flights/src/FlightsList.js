import * as React from "react";
import { useLocation } from "wouter";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";

import { rows } from "./data";

export const FlightsList = ({ base }) => {
  const [location, setLocation] = useLocation();

  const handleClick = (event, id) => {
    setLocation(`/${id}`);
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
