import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Challenges from './components/Challenges';
import Friends from './components/Friends';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Main from './components/Main';
import GameDescription from './components/GameDescription';
import Bet from './components/Bet';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
      <Router>
        <>
          <Header />
          <Navbar />
          <Friends />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/profile' component={Profile} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
