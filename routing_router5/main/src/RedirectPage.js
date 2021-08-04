import React from "react";
import { useRoute } from "react-router5";

const MIGHT_REDIRECT_TO_FLIGHTS = false;

// CASE-3
export function RedirectPage() {
  const { router } = useRoute();

  if (!MIGHT_REDIRECT_TO_FLIGHTS) {
    router.navigate("flights", {}, { reload: true });
    return <div />;
  }
  return <div>Not redirect</div>;
}
