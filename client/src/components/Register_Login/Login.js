import React, { useState,useEffect } from 'react';
import { login } from '../Authentication/Features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Navigate, useNavigate, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Link, FormControlLabel, Checkbox } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Paper, Typography } from '@mui/material';
import Draggable from 'react-draggable';
import MyImage from '../../assets/img/bars.png';

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

const Register = ({ open, close }) => {
  const navigate = useNavigate();
 
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [userLogin, setLogin] = useState({
    email: '',
    password: '',
  });
  
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin((userLogin) => ({ ...userLogin, [name]: value }));
  };


  const handleSubmitLogin = (e) => {

console.log(userLogin)
    // Login API
    dispatch(login(userLogin));
       if (isSuccess || user) {
      navigate('/dashboard');
      close(); // Close the dialog after successful login
}
  };

// useEffect(() => {
//   if (user || isSuccess) {
//     navigate('/dashboard');
//     // close(); // Close the dialog after successful login
//   }
// }, [user, isSuccess, navigate, close]);

// const handleSubmitLogin = (e) => {
//   e.preventDefault();
//   console.log(userLogin);

//   // Login API
//   dispatch(login(userLogin));
// };



  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
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
          <img src={MyImage} alt="logo" style={{ maxHeight: '19px' }} />
        </DialogTitle>
        <Typography style={{ color: 'blue' }}>Login</Typography>
        <div style={{ overflowY: 'hidden', pb: 2 }}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 1,
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
                  onChange={ handleLoginChange}
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
                  onClick={ handleSubmitLogin}
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
        </div>
        <DialogActions>
          <Button autoFocus onClick={close}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;

// import React,{useState} from 'react';
// import {login,register} from '../Authentication/Features/auth/authSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';
// import {Navigate,useNavigate,useHistory } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Grid, Link, FormControlLabel, Checkbox } from '@mui/material';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import {Paper,Typography} from '@mui/material';
// import Draggable from 'react-draggable';
// import MyImage from '../../assets/img/bars.png';

// function PaperComponent(props) {
//   return (
//     <Draggable
//       handle="#draggable-dialog-title"
//       cancel={'[class*="MuiDialogContent-root"]'}
//     >
//       <Paper {...props} />
//     </Draggable>
//   );
// }

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '16px',
//   overflowX: 'hidden', // Remove side scroll
// };

// const formContainerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   width: '100%',
//   overflowX: 'hidden', // Remove side scroll
// };

// const inputContainerStyle = {
//   width: '100%',
//   overflowX: 'hidden', // Remove side scroll
// };

// function Register({open,close}) {
//   const navigate = useNavigate();
// //   const [open, setOpen] = React.useState(false);
//   const [openReg, setOpenReg] = React.useState(false);
//   const [userLogin, setLogin] = useState({
//     email: '',
//     password: '',
//   });
//   const [registrationData, setRegistrationData] = useState({
//     name: '',
//     penitent: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const dispatch = useDispatch();

//   const { user, isLoading, isError, isSuccess, message } = useSelector(
//     (state) => state.auth
//   );

//   const handleCloseReg = () => {
//     setOpenReg(false);
//   };

//   const handleRegisterChange = (e) => {
//     setRegistrationData({
//       ...registrationData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmitRegister = (event) => {

//     // Check if all required fields are filled
//     if (
//       !registrationData.name ||
//       !registrationData.email ||
//       !registrationData.penitent ||
//       !registrationData.password ||
//       !registrationData.confirmPassword
//     ) {
//       handleCloseReg();
//       Swal.fire('Please fill in all required fields');
//       return;
//     }

//       // onchange for registration
//   const handleRegisterChange = (e) => {
//     setRegistrationData({
//       ...registrationData,
//       [e.target.name]: e.target.value,
//     });
//   };
//     // Check if passwords match
//     if (registrationData.password !== registrationData.confirmPassword) {
//       handleCloseReg();
//       Swal.fire({
//         icon: 'error',
//         title: '',
//         text: 'Passwords do not match!',
//         footer: '',
//       });
//       return;
//     }

//     // registration API
//     dispatch(register(registrationData));
//   };

//   return (
//     <div>

//         <Dialog
//          open={open}
//           onClose={close}
//           PaperComponent={PaperComponent}
//           aria-labelledby="draggable-dialog-title"
//         >
//           <DialogTitle
//             style={{
//               cursor: 'move',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: '#fffff',
//               color: '#7393B3',
//             }}
//             id="draggable-dialog-title"
//           >
//             <img src={MyImage} alt="logo" style={{ maxHeight: '40px' }} />
//           </DialogTitle>
//           <Typography style={{ color: 'blue' }}>Login</Typography>
//           <DialogContent sx={{ overflowY: 'hidden', pb: '16px' }}>
//             <Container component="main" maxWidth="xs">
//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   p: 4,
//                 }}
//               >
//                 <Typography component="h1" variant="h5">
//                   Sign in
//                 </Typography>
//                 <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     autoFocus
//                    onChange={handleRegisterChange}
//                   />
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     onChange={handleRegisterChange}
//                   />
//                   <FormControlLabel
//                     control={<Checkbox value="remember" color="primary" />}
//                     label="Remember me"
//                   />
//                   <Button
//                     type="button"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3 }}
//                     onClick={() => handleSubmitRegister()}
//                   >
//                     Sign In
//                   </Button>
//                   <Grid container>
//                     <Grid item xs>
//                       <Link href="#" variant="body2">
//                         Forgot password?
//                       </Link>
//                     </Grid>
//                     <Grid item>
//                       <Link href="#" variant="body2">
//                         {"Don't have an account? Sign Up"}
//                       </Link>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </Box>
//             </Container>
//           </DialogContent>
//           <DialogActions>
//             <Button autoFocus onClick={close}>
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>

//     </div>
//   )
// }

// export default Register
