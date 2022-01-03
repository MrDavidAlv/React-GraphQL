import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/app.css"
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://swapi.loquenecesito.co/graphql/"
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);   