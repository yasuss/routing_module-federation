import React, { useState } from "react";
import { Divider } from "@material-ui/core";
import { Switch, Route, NotFound, useLocation, getRouter } from "navigo-react";

import FlightsRoutes from "flights/routes";

import { Menu } from "./Menu";
import { Page404 } from "./Page404";
import { RedirectPage } from "./RedirectPage";
import { Home } from "./Home";

const DashboardService = React.lazy(() => import("dashboard/DashboardService"));

const leaveHome = ({ render, done, match }) => {
  render();
  const routeName = match[0].route.name;
  console.log("{ render, done, match }", { render, done, match });

  if (confirm(`Are you sure you want to go to ${routeName}?`)) {
    done();
  } else {
    done(false);
  }
};

const Main = () => {
  return (
    <div>
      <Menu />
      <Divider />
      <div style={{ marginBottom: 20 }} />

      <React.Suspense fallback={"Loading"}>
        <Switch>
          <Route path="/" name="home" leave={leaveHome}>
            <Home />
          </Route>
          <Route path="/dashboard" name="dashboard">
            <DashboardService />
          </Route>
          <Route path="/redirect" name="redirect">
            <RedirectPage />
          </Route>

          {FlightsRoutes.map((route) => (
            <Route path={route.path} name={route.name}>
              {route.element}
            </Route>
          ))}

          <NotFound>
            <Page404 />
          </NotFound>
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default Main;
