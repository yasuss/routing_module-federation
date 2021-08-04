import * as React from "react";

export default function Timer() {
  const [dateState, setDateState] = React.useState(new Date());
  React.useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div>
      <p>
        {" "}
        {dateState.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>
    </div>
  );
}
