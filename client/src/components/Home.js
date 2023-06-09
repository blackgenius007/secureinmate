import React, { useState, useEffect, Fragment } from 'react';
import {
  login,
  register,
  } from './Authentication/Features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {Navigate,useNavigate,useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Grid, Link, FormControlLabel, Checkbox } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import MyImage from '../assets/img/bars.png';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  overflowX: 'hidden', // Remove side scroll
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  overflowX: 'hidden', // Remove side scroll
};

const inputContainerStyle = {
  width: '100%',
  overflowX: 'hidden', // Remove side scroll
};

const Home = () => {
  const navigate = useNavigate();
   const [open, setOpen] = React.useState(false);
  const [openReg, setOpenReg] = React.useState(false);
  const [userLogin, setLogin] = useState({
    email: '',
    password: '',
  });
  const [registrationData, setRegistrationData] = useState({
    name: '',
    penitent: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleRegisterOpen = () => {
    setOpenReg(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseReg = () => {
    setOpenReg(false);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin((userLogin) => ({ ...userLogin, [name]: value }));
  };

  // onchange for registration
  const handleRegisterChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = (e) => {
   
console.log(userLogin)
    // Login API
    dispatch(login(userLogin));
       if (isSuccess || user) {
      navigate('/dashboard');
}
  };

  // useEffect(() => {
  //   if (isError) {
  //    alert(message)
  //   }

  //   if (isSuccess || user) {
  //     navigate('/dashboard');
  //     // alert('Loggedin...')
  //   }

   
  // }, [user, isError, isSuccess,message, isLoading,dispatch,navigate])

 


  // Submit registration form
  const handleSubmitRegister = (event) => {
    // Check if all required fields are filled
    if (
      !registrationData.name ||
      !registrationData.email ||
      !registrationData.penitent ||
      !registrationData.password ||
      !registrationData.confirmPassword
    ) {
      handleCloseReg();
      Swal.fire('Please fill in all required fields');
      return;
    }

    // Check if passwords match
    if (registrationData.password !== registrationData.confirmPassword) {
      handleCloseReg();
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'Passwords do not match!',
        footer: '',
      });
      return;
    }

    // registration API
    dispatch(register(registrationData));
  };

  return (
    <div id="header">
      <h1>
        SECUREINMATE
        <br />
        <br />
        <p style={{ textTransform: 'lowercase' }}>
          <span style={{ fontSize: '34px', fontFamily: 'cursive' }}>Find an inmate! </span>
        </p>
      </h1>
      <div className="button-group">
        <button type="button" onClick={handleClickOpen}>
          LOGIN
        </button>
        {/* <button type="button" onClick={handleRegisterOpen}>
          SIGN UP
        </button> */}

        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle
            style={{
              cursor: 'move',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fffff',
              color: '#7393B3',
            }}
            id="draggable-dialog-title"
          >
            <img src={MyImage} alt="logo" style={{ maxHeight: '30px' }} />
          </DialogTitle>
          <Typography style={{ color: 'blue' }}>Login</Typography>
          <DialogContent sx={{ overflowY: 'hidden', pb: '16px' }}>
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 4,
                }}
              >
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                   onChange={handleLoginChange} 
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleLoginChange} 
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={() => handleSubmitLogin()}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openReg}
          onClose={handleCloseReg}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle
            style={{
              cursor: 'move',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fffff',
              color: '#7393B3',
            }}
            id="draggable-dialog-title"
          >
            <img src={MyImage} alt="logo" style={{ maxHeight: '30px' }} />
          </DialogTitle>
          <Typography style={{ color: 'blue' }}>Registration</Typography>
          <DialogContent>
            <Grid
              container
              component="main"
              maxWidth="xs"
              style={containerStyle}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Grid
                container
                component="form"
                // onSubmit={handleSubmit}
                noValidate
                style={formContainerStyle}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} style={inputContainerStyle}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="user_name"
                      label="Full Name"
                      name="user_name"
                      autoComplete="user_name"
                      autoFocus
                      onChange={handleRegisterChange}

                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Penitentiary"
                      label="Penitentiary name"
                      name="Penitentiary"
                      autoComplete="Penitentiary"
                      autoFocus
                      onChange={handleRegisterChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} style={inputContainerStyle}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={handleRegisterChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      onChange={handleRegisterChange}
                    />
                  </Grid>
                  <Grid item xs={12} style={inputContainerStyle}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="email"
                      label="Email"
                      type="email"
                      id="email"
                      autoComplete="email"
                      onChange={handleRegisterChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                  onClick={() => handleSubmitRegister()}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleCloseReg}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Home;
