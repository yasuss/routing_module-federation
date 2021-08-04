import React, { useState } from "react";

export const Home = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Home page</h2>
      <p>Welcome to our app. What's your name?</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
