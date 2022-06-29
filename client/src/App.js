import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import activeSection from './utils/active-section';
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
      name: "Homepage"
    },
    { name: "Calendars"},
    { name: "Dashboard"},
    { name: "Login"},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <ApolloProvider client={client}>
      <div className="bg-neutral-200">
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}>
        </Header>
        <main>
          {activeSection(currentCategory)}
        </main>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
