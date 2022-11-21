/* @refresh reload */
import { render } from "solid-js/web";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "solid-app-router";

import "./index.css";
import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
