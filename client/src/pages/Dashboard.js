import React, { useState } from 'react';
import SimpleFileUpload from 'react-simple-file-upload'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { Link } from 'react-router-dom';

function Dashboard() {
  const [formState, setFormState] = useState({ message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { message } = formState;

  // this function is called when user submits their contact info
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Form', formState);
    }
  };

  // this function is called when the contact fields blur (are unfocused)
  const handleChange = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      setErrorMessage('');
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: red[300]
      },
      warning: {
        main: red[800]
      },

    }
  })

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

  function handleFileUpload(url){
    console.log('The URL of the file is ' + url)
  }

  return (
    <section className='flex flex-col items-center'>
      <h1 className="navActive text-center text-xl font-semibold">Create A Calendar</h1>
      <div className="self-center mb-5 mt-4">
        <SimpleFileUpload
          apiKey="5cbac5fce1d845f2b4f9c64d40049a94"
          onSuccess={handleFileUpload}
        />
      </div>
      <form className='flex flex-col w-full mb-8 sm:w-96' onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          {/* message/quote */}
          <TextField 
          onBlur={handleChange}
          type="multiline" name="message" defaultValue={message}
          variant="filled" color="warning" label="message" multiline='true'
          minRows='5' minColumns='20'
          >
          </TextField>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className='submit-button'>
            <Button 
            type="submit"
            variant='contained'
            color='primary'
            className="bg-red-400"
            > Submit </Button>
          </div>
        </ThemeProvider>
      </form>

      <div>
        <h1 className="text-center text-xl font-semibold">View Your Calendars</h1>
        <StyledButton
          variant='contained'
          className='bg-neutral-500 sm:w-96 sm:self-center'>
            <Link to={'/Calendars'}>View Calendars</Link>
        </StyledButton>
      </div>
    </section>
  );
}

export default Dashboard;