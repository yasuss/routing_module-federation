import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  Flight as FlightIcon,
  Home as HomeIcon,
  Redo as RedoIcon,
} from "@material-ui/icons";

import { BaseLink, useRoute, useRouteNode } from "react-router5";

const ListItemLink = (props) => {
  // CASE-7
  const { route } = useRouteNode("");
  const topRouteName = route.name.split(".")[0];
  const selected = props.name === topRouteName;
  
  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <BaseLink router={props.router} routeName={props.name} {...linkProps} />
      )),
    [props.to]
  );

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
  const { router } = useRoute();

  return (
    <List>
      <ListItemLink
        router={router}
        name="home"
        icon={<HomeIcon />}
        text="Home"
      />
      <ListItemLink
        router={router}
        name="dashboard"
        icon={<DashboardIcon />}
        text="Dashboard"
      />
      <ListItemLink
        router={router}
        name="flights"
        icon={<FlightIcon />}
        text="Flights"
      />
      <ListItemLink
        router={router}
        name="redirect"
        icon={<RedoIcon />}
        text="Redirect"
      />
    </List>
  );
};
