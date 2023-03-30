import React from 'react';
<<<<<<< Updated upstream
=======
//import Axios from 'axios';
>>>>>>> Stashed changes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
<<<<<<< Updated upstream
=======
import Main from './components/Main';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
>>>>>>> Stashed changes


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
          <Navbar />
          <Switch>
<<<<<<< Updated upstream
            <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
=======
            <Route exact path='/' component={Main} />
            <Route exact path='/nfl' component={Nfl} />
            <Route exact path='/mlb' component={Mlb} />
            <Route exact path='/nba' component={Nba} />
            <Route exact path='/nhl' component={Nhl} />
            <Route exact path='/loginform' component={LoginForm} />
            <Route exact path='/signupform' component={SignupForm} />
            <Route exact path='/profile' component={Profile} />
>>>>>>> Stashed changes
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
