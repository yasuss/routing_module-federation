import React from "react";
import { Redirect, useLocation } from "wouter";

const MIGHT_REDIRECT_TO_FLIGHTS = false;

export const RedirectPage = () => {
  if (MIGHT_REDIRECT_TO_FLIGHTS) {
    return <div>Not redirect</div>;
  }
  return <Redirect to="/flights" />;
};
