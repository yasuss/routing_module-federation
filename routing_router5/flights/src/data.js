function createData(id, date, number, airport, status) {
  return { id, date, number, airport, status };
}

export const rows = [
  createData(1, "21 Jul  07:00", "RL 707", "SOCHI", "Departed"),
  createData(2, "21 Jul  07:15", "U6 087", "ANAPA", "Departed"),
  createData(3, "21 Jul  07:25", "S7 2101", "ANAPA", "Departed"),
  createData(4, "21 Jul  07:45", "U6 457", "SOCHI", "Gate Closed"),
  createData(5, "21 Jul  08:40", "S7 1213", "KALININGRAD", "Gate Closed"),
];
