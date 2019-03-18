import React from 'react';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import { Router, Route } from 'react-router-dom'

const client = new ApolloClient({
    uri: '/api/graphql'
});

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <ApolloProvider client={client}>
            <div>
              <Route path="/" render={(props) => <App auth={auth} {...props} />} />
              <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
              }}/>
            </div>
        </ApolloProvider>
      </Router>
  );
}
