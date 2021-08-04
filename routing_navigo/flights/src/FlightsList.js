import * as React from "react";
import { getRouter } from "navigo-react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";

import { rows } from "./data";

const FlightsList = () => {
  const handleClick = (event, id) => {
    getRouter().navigateByName(`flights_details`, { id: id });
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

export default FlightsList;
