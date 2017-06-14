import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./App";

injectTapEventPlugin();

const Root = () =>
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>;

ReactDOM.render(<Root />, document.getElementById("example"));
