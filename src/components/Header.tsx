import * as React from "react";
// import styled from "styled-components";
import AppBar from "material-ui/AppBar";

const Header = () =>
  <AppBar
    title="Calculate Worktime"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    titleStyle={{ fontSize: "13px" }}
  />;

export default Header;
