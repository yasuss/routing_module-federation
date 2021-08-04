import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  Flight as FlightIcon,
  Home as HomeIcon,
  Redo as RedoIcon,
} from "@material-ui/icons";

import { Link, useMatch } from "react-router-dom";

const ListItemLink = (props) => {
  console.log("props", props);
  const selected = useMatch(props.to);
  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={props.to} {...linkProps} />
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

export const Menu = () => (
  <List>
    <ListItemLink to="/" icon={<HomeIcon />} text="Home" />
    <ListItemLink to="dashboard" icon={<DashboardIcon />} text="Dashboard" />
    <ListItemLink to="flights" icon={<FlightIcon />} text="Flights" />
    <ListItemLink to="redirect" icon={<RedoIcon />} text="Redirect" />
  </List>
);
