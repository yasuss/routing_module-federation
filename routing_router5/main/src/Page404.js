import React from "react";
import { Link } from "react-router5";

export function Page404() {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link routeName="home">Go Home</Link>
    </div>
  );
}
