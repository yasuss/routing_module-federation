import React from "react";
import { Divider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./Menu";
import { ServiceProvider } from "./Service";
import { Page404 } from "./Page404";
import { RedirectPage } from "./RedirectPage";
import { Home } from "./Home";

const FlightsService = React.lazy(() => import("flights/Flights"));
const DashboardService = React.lazy(() => import("dashboard/DashboardService"));

const Main = () => {
  return (
    <ServiceProvider>
      <BrowserRouter>
        <Menu />
        <Divider />
        <div style={{ marginBottom: 20 }} />

        <React.Suspense fallback={"Loading"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard/*" element={<DashboardService />} />
            <Route path="flights/*" element={<FlightsService />} />
            <Route path="redirect/*" element={<RedirectPage />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </ServiceProvider>
  );
};

export default Main;
