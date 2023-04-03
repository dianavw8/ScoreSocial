import React from "react";
import { useState } from "react";
import {
  Route,
  HashRouter,
  BrowserRouter,
  Redirect,
  Switch,
} from "react-router-dom";
import SSHeader from "./components/Header";
import Profile from "./pages/Profile";
import Username from "./pages/Username";
import SignupForm from "./components/SignupForm";
import { MyContext, SportContext } from "./components/MyContext";
import UpdatePoints from "./components/PointsForm";
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
import GameDescription from "./components/GameDescription";

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
  const [gameId, setGameId] = useState("");
  const [sport, setSport] = useState("defaultSport");
  return (
    <ApolloProvider client={client}>
      <SportContext.Provider value={{ sport, setSport }}>
        <MyContext.Provider value={{ gameId, setGameId }}>
          <BrowserRouter>
            <SSHeader />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/username" component={Username} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignupForm} />
              <Route path="/profile" component={Profile} />
              <Route path="/pointsform" component={UpdatePoints} />
              <Route path="/landingpage" component={LandingPage} />
              <Route path={`/gamedescription/:gameId`}>
                <GameDescription />
              </Route>
            </Switch>
          </BrowserRouter>
        </MyContext.Provider>
      </SportContext.Provider>
    </ApolloProvider>
  );
}

export default App;
