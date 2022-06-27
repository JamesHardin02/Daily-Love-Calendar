import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import activeSection from './utils/active-section';


function App() {
  const [categories] = useState([
    {
      name: 'Homepage'
    },
    { name: 'Calendars'},
    { name: 'Dashboard'},
    { name: 'Login'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
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
  );
}

export default App;
