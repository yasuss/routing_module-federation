import React from "react";
import { Navigate } from "react-router-dom";

const MIGHT_REDIRECT_TO_FLIGHTS = false;

// CASE-3
export function RedirectPage() {
  if (MIGHT_REDIRECT_TO_FLIGHTS) {
    return <div>Not redirect</div>;
  }
  return <Navigate to="/flights" />;
}
