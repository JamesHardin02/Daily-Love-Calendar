import React, { useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

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
  return (
    <section className='margin-top flex-col-center'>
      <h1 className="text-center text-xl font-semibold">Create A Calendar</h1>
      <form className='flex-col-center' onSubmit={handleSubmit}>
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
    </section>
  );
}

export default Dashboard;