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
  // useEffect(()=>{
    
  // }, [currentCategory]);
  return (
    <header className='bg-red-900 flex flex-col mb-2'>
      <a className='navActive text-center flex flex-col justify-center sm:w-96 sm:self-center'data-testid="link" href="/">
        <h2 className='text-xl font-semibold'>       
            Daily Love Calendar
        </h2>
      </a>
      <nav className='sm:self-center'>
        <Nav       
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}>
        </Nav>
      </nav>
    </header>
  );
}