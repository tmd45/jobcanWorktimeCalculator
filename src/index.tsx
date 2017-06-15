import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { createStore } from "redux";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./App";
import reducer from "./reducer";

injectTapEventPlugin();

chrome.storage.sync.get(null, state => {
  const store = createStore(reducer, state);

  const Root = () =>
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>;

  ReactDOM.render(<Root />, document.getElementById("example"));
});
