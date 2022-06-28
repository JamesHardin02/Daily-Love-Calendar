import React, { useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/system'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { validateEmail } from '../../utils/helpers';

export default function Login() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // this function is called when user submits their login info
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Form', formState);
    }
  };

  // this function is called when the login fields blur (are unfocused)
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
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

  return (
    <section className='flex flex-col items-center'>
      <h1 className="text-center" data-testid="h1tag">Login Form</h1>
      <form className='flex flex-col w-full mb-8 sm:w-96' onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          {/* name */}
          <TextField 
          onBlur={handleChange}
          type="text" name="name" defaultValue={name}
          variant="filled" color="warning" label="name"
          placeholder="your name here"
          >
          </TextField>
          {/* email */}
          <TextField 
          onBlur={handleChange}
          type="text" name="email" defaultValue={email}
          variant="filled" color="warning" label="Email Address"
          placeholder="email@email.com"
          >
          </TextField>
          {/* message */}
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
        <StyledButton
          variant='contained'
          className='bg-neutral-500 sm:w-96 sm:self-center'>
            No Account? Sign Up
        </StyledButton>
    </section>
  );
}
