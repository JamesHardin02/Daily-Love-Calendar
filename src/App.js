import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  const [categories] = useState([
    {
      name: 'Homepage'
    },
    { name: 'Calendars'},
    { name: 'Dashboard'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}>
        </Header>
    </div>
  );
}

export default App;
