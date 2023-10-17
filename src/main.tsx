import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();

// TODO: ApolloClient hier erstellen

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* TODO: App in ApolloProvider wrappen */}
    <App />
  </React.StrictMode>
);
