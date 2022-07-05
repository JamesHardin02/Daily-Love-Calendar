import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Calendars from './pages/Calendars'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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
  const [categories] = useState([
    {
      name: "Home"
    },
    { name: "Calendars"},
    { name: "Dashboard"},
    { name: "Login"},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-neutral-200">
          <Header
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}>
          </Header>
          <div>
            <Routes>
              <Route
                path="/Home"
                element={<Home />}
              />
              <Route
                path="/Calendars"
                element={<Calendars />}
              />
              <Route
                path="/Login"
                element={<Login />}
              />
              <Route path="/Dashboard">
                <Route path=":username" element={<Dashboard />} />
                <Route path="" element={<Dashboard />} />
              </Route>
              <Route
                path="*"
                element={<Home />}
              />
            </Routes>
          </div>
          <Footer></Footer>
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
