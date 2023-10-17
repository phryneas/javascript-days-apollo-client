import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  Observable,
  ApolloLink,
} from "@apollo/client";

const delayLink = new ApolloLink((operation, forward) => {
  const delay = operation.getContext().delay ?? 0;
  return new Observable((observer) => {
    const handle = setTimeout(() => {
      forward(operation).subscribe({
        next: observer.next.bind(observer),
        error: observer.error.bind(observer),
        complete: observer.complete.bind(observer),
      });
    }, delay);
    return () => clearTimeout(handle);
  });
});

const httpLink = new HttpLink({
  uri: "http://localhost:3010/",
});

const client = new ApolloClient({
  link: delayLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Dog: {
        fields: {
          born: {
            read(existing) {
              if (!existing) return existing;
              return new Date(existing).toLocaleDateString();
            },
          },
        },
      },
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
