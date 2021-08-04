import React from "react";
import { getRouter } from "navigo-react";

export function Page404() {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <button onClick={() => getRouter().navigateByName("home")}>
        Go Home
      </button>
    </div>
  );
}
