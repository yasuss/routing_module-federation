import React from "react";
const Main = React.lazy(() => import("main/Main"));

function App() {
  return (
    <React.Suspense >
      <Main />
    </React.Suspense>
  );
}

export default App;
