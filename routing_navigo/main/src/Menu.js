import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  Flight as FlightIcon,
  Home as HomeIcon,
  Redo as RedoIcon,
} from "@material-ui/icons";
import { useLocation, getRouter } from "navigo-react";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setTimeout(() => setValue((value) => value + 1), 1);
}

const ListItemLink = (props) => {
  const router = getRouter();
  // CASE-7
  const currentRouter = useLocation();
  const currentRouteName = currentRouter ? currentRouter.route.name : "";
  const selected = props.to == currentRouteName;

  const CustomLink = React.forwardRef((linkProps, ref) => {
    return (
      <a
        ref={ref}
        data-navigo
        {...linkProps}
        onClick={() => {
          router.navigate(props.to);
          props.forceUpdate();
        }}
      />
    );
  });

  return (
    <li>
      <ListItem selected={selected} button component={CustomLink}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </li>
  );
};

export const Menu = () => {
  const forceUpdate = useForceUpdate();

  return (
    <List>
      <React.Suspense>
        <ListItemLink
          forceUpdate={forceUpdate}
          to=""
          icon={<HomeIcon />}
          text="Home"
        />
        <ListItemLink
          forceUpdate={forceUpdate}
          to="dashboard"
          icon={<DashboardIcon />}
          text="Dashboard"
        />
        <ListItemLink
          forceUpdate={forceUpdate}
          to="flights"
          icon={<FlightIcon />}
          text="Flights"
        />
        <ListItemLink
          forceUpdate={forceUpdate}
          to="redirect"
          icon={<RedoIcon />}
          text="Redirect"
        />
      </React.Suspense>
    </List>
  );
};
