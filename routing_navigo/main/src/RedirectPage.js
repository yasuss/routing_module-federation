import React from "react";
import { Redirect, getRouter, useNavigo } from "navigo-react";

const MIGHT_REDIRECT_TO_FLIGHTS = false;

// CASE-3
export const RedirectPage = () => {
  if (MIGHT_REDIRECT_TO_FLIGHTS) {
    return <div>Not redirect</div>;
  }
  const redirectUrl = "/flights";
  return <Redirect path={redirectUrl} />;
};
