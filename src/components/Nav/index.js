import Button from '@mui/material/Button'
import { styled } from '@mui/system'
function Nav(props){
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  const StyledButton = styled(Button, {})({
    color: '#4e372e',
    border: '5px solid #eedddd',
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
    <div className='flex flex-col sm:flex-row'>
      {categories.map((category) => (
          <StyledButton variant='contained'
            className={` ${ //if currentCategory.name is the category iterated on then add navActive class
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
      ))}
    </div>
  )
}

export default Nav