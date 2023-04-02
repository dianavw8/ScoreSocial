import React from "react";
// import Axios from 'axios';
import { Route, HashRouter, BrowserRouter, Redirect, Switch } from "react-router-dom";
import SSHeader from "./components/Header";
import Profile from "./pages/Profile";
import Username from "./pages/Username";
import Points from "./pages/Points";
import SignupForm from "./components/SignupForm";
import LandingPage from "./pages/Landingpage";

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
      <BrowserRouter>
          <SSHeader />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/points" component={Points} />
            <Route path="/username" component={Username} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/profile" component={Profile} />
            <Route path="/landingpage" component={LandingPage} />
          </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
