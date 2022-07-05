import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import { styled } from '@mui/system'
import fathersDayPicture from '../assets/images/homepage-ex1.jpg'

export default function Home(){
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
    <section>
      <div className='flex flex-col'>     
        <p className='text-center font-semibold text-xl'>Send your loved ones a Daily Love Calendar to show how much you appreciate them</p>
          <StyledButton 
            variant='contained'
            className='bg-neutral-500 sm:w-96 sm:self-center'>
              <Link to={'/Dashboard'}>Create A Calendar</Link>
          </StyledButton>

      </div>
      <div className='homepage-photos mx-auto mt-5 sm:w-96'>
        <img alt='fathers day appreciation example' src={fathersDayPicture}></img>
      </div>
    </section>
  )
}