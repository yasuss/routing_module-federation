import createRouter, { constants } from "router5";
import loggerPlugin from "router5-plugin-logger";
import browserPlugin from "router5-plugin-browser";
import routes from "./routes";

export default function configureRouter() {
  const router = createRouter(routes, {
    defaultRoute: constants.UNKNOWN_ROUTE,
    autoCleanUp: true,
    allowNotFound: true,
  });

  router.usePlugin(loggerPlugin);

  router.usePlugin(browserPlugin({ forceDeactivate: false }));

  return router;
}
