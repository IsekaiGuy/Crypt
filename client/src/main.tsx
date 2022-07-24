import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {TransactionProvider} from "./context/TransactionContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TransactionProvider>
        <App />
    </TransactionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
