import React, { useState } from 'react';
import { register, reset } from './Authentication/Features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
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
  const [registrationData, setRegistrationData] = useState({
    name: '',
    penitent: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

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

  const handleChange = (e) => {
    toast('Login initiated');
  };

  const handleRegisterChange = (e) => {
    alert('alert...')
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (
      !registrationData.name ||
      !registrationData.email ||
      !registrationData.password ||
      !registrationData.confirmPassword
    ) {
      setError('Please fill in all required fields');
      return;
    }

    // Check if passwords match
    if (registrationData.password !== registrationData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Proceed with registration
    setError('');

    // Your registration logic here
    console.log(registrationData);
  };

  return (
    <div id="header">
      <h1>
        SECUREINMATE
        <br />
        <p></p>
      </h1>
      <div className="button-group">
        <button type="button" onClick={handleClickOpen}>
          LOGIN
        </button>
        <button type="button" onClick={handleRegisterOpen}>
          SIGN UP
        </button>
              

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
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1, width: '100%' }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
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
                onSubmit={handleSubmit}
                noValidate
                style={formContainerStyle}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} style={inputContainerStyle}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      name="name"
                      autoComplete="name"
                      autoFocus
                      onChange={ handleRegisterChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="penitent"
                      label="Penitentiary name"
                      name="penitent"
                      autoComplete="penitent"
                      autoFocus
                      onChange={ handleRegisterChange}
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
                      onChange={ handleRegisterChange}
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
                      onChange={ handleRegisterChange}
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
                      onChange={ handleRegisterChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
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
