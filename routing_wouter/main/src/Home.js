import React, { useState } from "react";

const useRouteConfirmation = (message, LockContext, name) => {
  const ctx = React.useContext(LockContext);
  ctx.name = name;

  React.useEffect(() => {
    ctx.lock = true;
    ctx.message = message;

    return () => {
      ctx.lock = false;
      ctx.message = null;
    };
  }, [ctx]);
};

export const Home = ({ LockContext }) => {
  const [name, setName] = useState("");

  useRouteConfirmation(
    "Are you sure you want to leave this page?",
    LockContext,
    name
  );

  return (
    <div>
      <h2>Home page</h2>
      <p>Welcome to our app. What's your name?</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
