import React from "react";
import { Divider } from "@material-ui/core";
import { Switch, Route, Router } from "wouter";
import useLocation from "wouter/use-location";
import { Menu } from "./Menu";
import { Page404 } from "./Page404";
import { RedirectPage } from "./RedirectPage";
import { Home } from "./Home";

const FlightsService = React.lazy(() => import("flights/Flights"));
const DashboardService = React.lazy(() => import("dashboard/DashboardService"));

const LockContext = React.createContext({ lock: false });

// CASE-6
const useLocationWithConfirmation = () => {
  const [location, setLocation] = useLocation();
  const ctx = React.useContext(LockContext);

  return [
    location,
    (newLocation) => {
      let perfomNavigation = true;
      if (ctx.lock) {
        perfomNavigation = !!ctx.name
          ? window.confirm(ctx.message || "Are you sure?")
          : true;
      }

      if (perfomNavigation) setLocation(newLocation);
    },
  ];
};

const Main = () => {
  return (
    <Router hook={useLocationWithConfirmation}>
      <Menu />
      <Divider />
      <div style={{ marginBottom: 20 }} />

      {/* CASE-1 */}
      <React.Suspense fallback={"Loading"}>
        <Route path="/">
          <Home LockContext={LockContext} />
        </Route>

        <DashboardService path="/dashboard" />

        <Route path="/redirect">
          <RedirectPage />
        </Route>

        <FlightsService path="/flights" />

        {/* CASE-2 Doesn't work with CASE-1 */}
        {/* <Route>
            <Page404 />
          </Route> */}
      </React.Suspense>
    </Router>
  );
};

export default Main;
