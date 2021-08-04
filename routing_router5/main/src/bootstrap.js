import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router5";

import createRouter from "./create-router";
import App from "./App";

const router = createRouter();

router.start(() => {
  ReactDOM.render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>,
    document.getElementById("root")
  );
});
