import React, { useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { validateEmail } from '../utils/helpers';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login() {
  const [formStateLogin, setFormStateLogin] = useState({ loginEmail: '', loginPassword: ''});
  const [formStateSignUp, setFormStateSignUp] = useState({ signUpName: '', signUpEmail: '', signUpPassword: ''});
  const [errorMessageLogin, setErrorMessageLogin] = useState('');
  const [errorMessageSignUp, setErrorMessageSignUp] = useState('');
  const { loginEmail, loginPassword } = formStateLogin;
  const { signUpName, signUpEmail, signUpPassword } = formStateSignUp;
  
  const [login] = useMutation(LOGIN_USER);
  // this function is called when user submits their login info
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formStateLogin },
      });

      console.log("Logged in")
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }
  };

  // this function is called when the login fields blur (are unfocused)
  const handleChangeLogin = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessageLogin('Your email is invalid.');
      } else {
        setErrorMessageLogin('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessageLogin(`${e.target.name} is required.`);
      } else {
        setErrorMessageLogin('');
      }
    }
    if (!errorMessageLogin) {
      setFormStateLogin({ ...formStateLogin, [e.target.name]: e.target.value });
    }
  };
    const [addUser] =useMutation(ADD_USER)
    // this function is called when user submits their sign up info
    const handleSubmitSignUp = async (event) => {
      event.preventDefault();
      try {
        const { data } = await addUser({
          variables: { ...formStateSignUp },
        });
        console.log(data)
        Auth.login(data.addUser.token);
      } catch (error) {
        console.error(error);
      }
    };
  
    // this function is called when the sign up fields blur (are unfocused)
    const handleChangeSignUp = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessageSignUp('Your email is invalid.');
        } else {
          setErrorMessageSignUp('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessageSignUp(`${e.target.name} is required.`);
        } else {
          setErrorMessageSignUp('');
        }
      }
      if (!errorMessageSignUp) {
        setFormStateSignUp({ ...formStateSignUp, [e.target.name]: e.target.value });
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
    <section className='flex flex-col items-center'>
      <h1 className="text-center navActive text-xl font-semibold">Login Form</h1>
      <form className='flex flex-col w-full mb-8 sm:w-96' onSubmit={handleSubmitLogin}>
        <ThemeProvider theme={theme}>
          {/* email */}
          <TextField 
          onBlur={handleChangeLogin}
          type="text" name="email" defaultValue={loginEmail}
          variant="filled" color="warning" label="Email Address"
          placeholder="email@email.com"
          >
          </TextField>
          {/* password */}
          <TextField 
          onBlur={handleChangeLogin}
          type="text" name="password" defaultValue={loginPassword}
          variant="filled" color="warning" label="Password"
          placeholder="your password here"
          >
          </TextField>
          {errorMessageLogin && (
            <div>
              <p className="error-text">{errorMessageLogin}</p>
            </div>
          )}
          <div className='submit-button'>
            <Button 
            type="submit"
            variant='contained'
            color='primary'
            className="bg-red-400"
            > Login </Button>
          </div>
        </ThemeProvider>
      </form>
      <h1 className="text-center navActive text-xl font-semibold">No Account? Sign Up!</h1>
      <form className='flex flex-col w-full mb-8 sm:w-96' onSubmit={handleSubmitSignUp}>
        <ThemeProvider theme={theme}>
          {/* name */}
          <TextField 
          onBlur={handleChangeSignUp}
          type="text" name="username" defaultValue={signUpName}
          variant="filled" color="warning" label="Name"
          placeholder="your name here"
          >
          </TextField>
          {/* email */}
          <TextField 
          onBlur={handleChangeSignUp}
          type="text" name="email" defaultValue={signUpEmail}
          variant="filled" color="warning" label="Email Address"
          placeholder="email@email.com"
          >
          </TextField>
          {/* password */}
          <TextField 
          onBlur={handleChangeSignUp}
          type="text" name="password" defaultValue={signUpPassword}
          variant="filled" color="warning" label="Password"
          placeholder="your password here"
          >
          </TextField>
          {errorMessageSignUp && (
            <div>
              <p className="error-text">{errorMessageSignUp}</p>
            </div>
          )}
          <div className='submit-button'>
            <Button 
            type="submit"
            variant='contained'
            color='primary'
            className="bg-red-400"
            > Sign Up </Button>
          </div>
        </ThemeProvider>
      </form>
    </section>
  );
}
