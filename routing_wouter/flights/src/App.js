import React from "react";
const Main = React.lazy(() => import("main/Main"));

function App() {
  return (
    <React.Suspense fallback={<LoadingShell />}>
      <Main />
    </React.Suspense>
  );
}

function LoadingShell() {
  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography className={classes.text}>Loading Shell</Typography>
    </div>
  );
}

export default App;
