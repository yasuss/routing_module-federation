import { constants } from "router5";

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
  { name: constants.UNKNOWN_ROUTE, path: "/404" },
];
