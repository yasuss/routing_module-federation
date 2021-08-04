import { constants } from "router5";

// CASE-1
export default [
  { name: "home", path: "/" },
  {
    name: "dashboard",
    path: "/dashboard",
    children: [{ name: "details", path: "/:id" }],
  },
  {
    name: "flights",
    path: "/flights",
    children: [{ name: "details", path: "/:id" }],
  },
  { name: "redirect", path: "/redirect" },
  // CASE-2
  { name: constants.UNKNOWN_ROUTE, path: "/404" },
];
