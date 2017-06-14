import * as React from "react";

import Notification from "./Notification";
import DefinitionList from "./DefinitionList";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const MainPage = () =>
  <div>
    <h3>Calculate Working Time</h3>
    <Notification />
    <DefinitionList />
  </div>;

export default MainPage;
