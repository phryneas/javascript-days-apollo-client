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
  Observable,
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

const delayLink = new ApolloLink((operation, forward) => {
  const delay = operation.getContext().delay;
  return new Observable((observer) => {
    const timeout = setTimeout(
      () =>
        forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        }),
      delay
    );
    return () => clearTimeout(timeout);
  });
});

const httpLink = new HttpLink({
  uri: "http://localhost:3010/",
});

const client = new ApolloClient({
  cache,
  link: delayLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
