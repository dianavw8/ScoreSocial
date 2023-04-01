import React from "react";
// import Axios from 'axios';
import { BrowserRouter as Switch, Route, HashRouter } from "react-router-dom";
import SSHeader from "./components/Header";
import Profile from "./pages/Profile";
import Username from "./pages/Username";
import Points from "./pages/Points";
import SignupForm from "./components/SignupForm";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HashRouter >
        <>
          <SSHeader />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/points" component={Points} />
            <Route exact path="/username" component={Username} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </>
      </HashRouter >
    </ApolloProvider>
  );
}

export default App;
