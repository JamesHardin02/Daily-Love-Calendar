import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import { styled } from '@mui/system'

function Nav(props){
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  const StyledButton = styled(Button, {})({
    color: '#eedddd',
    border: '5px solid #3B3636',
    backgroundColor: '#D3B5B5',
    borderRadius: '500px',
    margin:'5px',
    padding: '7px',
    fontSize: 'larger',
    '&:hover': {
                backgroundColor: "#d36565",
                borderColor: "#eedddd"
              }
  })

  return(
    <div className='grid grid-rows-2 grid-flow-col sm:flex sm:grid-rows-none'>
      {categories.map((category) => (
        <Link to={`/${category.name}`}>
          <StyledButton variant='contained'
            className={` bg-neutral-500 ${ //if currentCategory.name is the category iterated on then add navActive class
              currentCategory.name === category.name && `navActive`
              }`}
            key={category.name}
          >
            <span onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {category.name}
            </span>
          </StyledButton>
        </Link>
      ))}
    </div>
  )
}

export default Nav