import React, { useState } from "react";
import {
  configureRouter,
  Switch,
  Route,
  getRouter,
  useLocation,
  Base,
} from "navigo-react";

export const Home = () => {
  const [name, setName] = useState("");
  const router = getRouter();
  console.log("router", router);

  return (
    <div>
      <h2>Home page</h2>
      <p>Welcome to our app. What's your name?</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
