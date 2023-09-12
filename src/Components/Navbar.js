import React from "react";
import { Toolbar, AppBar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background-color: red;
`;
const Tabs = styled(NavLink)`
  font-size: large;
  font-weight: bolder;
  margin: 10px;
  background-color: red;
  text-decoration: none;
`;

function Navbar() {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">View Users</Tabs>
          &nbsp;
          <Tabs to="/add"> Create Users</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
}

export default Navbar;
