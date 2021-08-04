import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  Flight as FlightIcon,
  Home as HomeIcon,
  Redo as RedoIcon,
} from "@material-ui/icons";

import { Link, useLocation, useRoute } from "wouter";

const ListItemLink = (props) => {
  const [isActive] = useRoute(props.href);
  const [location, setLocation] = useLocation();
  console.log("ListItemLink location", location);

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} href={props.href} {...linkProps} />
      )),
    [props.href]
  );

  return (
    <li>
      <ListItem selected={isActive} button component={CustomLink}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </li>
  );
};

export const Menu = () => (
  <List>
    <ListItemLink href="/" icon={<HomeIcon />} text="Home" />
    <ListItemLink href="/dashboard" icon={<DashboardIcon />} text="Dashboard" />
    <ListItemLink href="/flights" icon={<FlightIcon />} text="Flights" />
    <ListItemLink href="/redirect" icon={<RedoIcon />} text="Redirect" />
  </List>
);
