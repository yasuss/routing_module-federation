import React, { useState } from "react";
import { useRouteNode } from "react-router5";

export const Home = () => {
  const [name, setName] = useState("");

  const { router } = useRouteNode("home");
  router.canDeactivate(
    "home",
    (router) => (toState, fromState) =>
      name !== ""
        ? !!name && confirm(`Are you sure you want to go to ${toState.name}?`)
        : true
  );

  return (
    <div>
      <h2>Home page</h2>
      <p>Welcome to our app. What's your name?</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
