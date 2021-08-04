import React, { useState } from "react";
import { Prompt } from "react-router-dom";

export const Home = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <Prompt
        when={!!name}
        message={`Are you sure you want to go to ${location.pathname}`}
      />

      <h2>Home page</h2>
      <p>Welcome to our app. What's your name?</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
