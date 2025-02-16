import { hydrateRoot } from "react-dom/client";

import App from "./App/App";
import React from "react";

export default () => {
  hydrateRoot(document.getElementById("app")!, <App />);
};
