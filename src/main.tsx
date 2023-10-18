import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

loadDevMessages();
loadErrorMessages();

const cache = new InMemoryCache({
  typePolicies: {
    Dog: {
      fields: {
        born: {
          merge(existing, incoming) {
            return new Date(incoming).toLocaleDateString();
          },
          /*
          read(existing) {
            if (!existing) return undefined;
            return new Date(existing).toLocaleDateString();
          },
          */
        },
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: "http://localhost:3010/",
});

const client = new ApolloClient({
  cache,
  link: httpLink,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
