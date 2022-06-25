import Nav from '../Nav'
import React, { useEffect } from 'react';

export default function Header(props) {
  // deconstruct properties sent that keep track of section choosen to view
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;
  
  // updated the tab title to the current section the user has clicked to view
  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);
  
  return (
    <header className='bg-red-900 flex'>
      <h2 className='navActive'>
        <a data-testid="link" href="/">
          Daily Love Calendar
        </a>
      </h2>
      <nav>
        <Nav       
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}>
        </Nav>
      </nav>
    </header>
  );
}