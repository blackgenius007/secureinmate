import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ButtonBase } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import { retrieveAllInmates,deleteInmateById } from '../InmateServices/inmateSlice';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable';
import Image from 'react-bootstrap/Image';
import { PersonOutline } from '@mui/icons-material'
import { Typography, Chip, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import UploadPhoto from './uploadPhoto';
import { Popup } from 'semantic-ui-react';
import face from '../../assets/img/face-0.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const FilterableTable = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { inmates, isLoading, isError, message } = useSelector(
    (state) => state.inmates
  );
 
  const [searched, setSearched] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedInmate, setSelectedInmate] = useState(null);
  const [isUploadVisible, setUploadVisible] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const [resume, setResume] = useState({});
  const [url, setUrl] = useState({});
  const [uploadedFile, setUploadedFile] = useState({});
  const [preview, setPreview] = useState(false);
  const [avatar, setAvatar] = useState(false);

  // Photo onChanged function
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    const url = URL.createObjectURL(fileUploaded);
    setUrl(url);
    setResume(fileUploaded);
    console.log(fileUploaded.name);
    console.log(fileUploaded);
    console.log(resume);
    setPreview(true);
  };
  // function to upload inmate picture
  const onSubmitPhoto = async () => {
    try {
      if (resume) {
        const formData = new FormData();
        formData.append('image', resume, resume.name);

        const response = await axios.post(`/api/v1/images/${selectedInmate._id}`, formData);
        console.log('Server response:');
        console.log(response.data);

        // Handle success scenario
        alert('Uploaded successfully');
      } else {
        alert('Please select an image');
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  // const onSubmitPhoto = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   console.log(resume);
  //   formData.append('images', resume);
  //   console.log(formData);
    
  //   if (formData && resume) {
  //     axios.post(`/api/v1/images/${selectedInmate._id}`, formData).then(
  //       (res) => {
  //         alert('Submitted successfully!');
  //         setAvatar(true);
             
  //       },   

  //       (err) => {
  //         // alert('An error occured! Try submitting the form again.', err);
  //         if (err.response.status === 500) alert(err.response.data);
  //       }
  //     );
  //     console.log(resume, formData);
  //   } else {
  //     alert('Please select a file!');
  //   }
  // };



  // const onSubmitPhoto = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   console.log(selectedInmate._id);
  //   formData.append('streamfile', inmate);
  //   console.log(formData);
  //   setIsActive(true);
  //   if (formData && inmate) {
  //     axios.post(`/api/v1/images/inmate/${selectedInmate._id}`, formData).then(
  //       (res) => {
  //         alert('Submitted successfully!');
      
          
  //       },   

  //       (err) => {
  //         // alert('An error occured! Try submitting the form again.', err);
  //         if (err.response.status === 500) alert(err.response.data);
  //       }
  //     );
  //     console.log(inmate, formData);
  //   } else {
  //     alert('Please select a file!');
  //   }
  // };




 
 // Toggle function
  const toggleUpload = () => {
    setUploadVisible((prevState) => !prevState);
  };
  
  const requestSearch = (searchedVal) => {
    setSearched(searchedVal);
  };

  const cancelSearch = () => {
    setSearched('');
  };

  // retrieve all inmates from API
  useEffect(() => {
    // Dispatch retrieveAllInmates action
    dispatch(retrieveAllInmates());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  const filteredRows = inmates.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searched.toLowerCase())
    );
  });

  // function handles update
  const handleUpdate = (inmateId) => {
    navigate(`/inmates-update/${inmateId}`);
  };

 // function handles delete
const handleDelete=(id)=>{
  dispatch(deleteInmateById(id));

  // function opens Dialog
}
  const handleOpenDialog = (inmate) => {
    // Open the dialog and pass the inmate data
    setOpenDialog(true);
    setSelectedInmate(inmate);
  };

  const handleEditClick = () => {
    setOpenEditDialog(true);
  };
  const closeEditClick = () => {
    setOpenEditDialog(false);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setOpenDialog(false);
    setSelectedInmate(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = filteredRows.slice(startIndex, endIndex);

  return (
    <>
   
      <TextField
        value={searched}
        onChange={(e) => requestSearch(e.target.value)}
        label="Search"
        variant="outlined"
        size="small"
      />
      <Box height={400} overflow="auto" sx={{ width: '100%' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{color:'blue'}}><small><i>Click on inmate name for details</i></small></TableCell>
              <TableCell align="right">inmate</TableCell> 
                {/* <TableCell align="right">Social_security</TableCell> */}
                <TableCell align="right">Booking Date</TableCell>
                <TableCell align="right">Booking Officer</TableCell>
                <TableCell align="right">Booking Time</TableCell>
                <TableCell align="right">Arrest location</TableCell>
                <TableCell align="right">Verdict</TableCell>
                <TableCell align="right">Belongings</TableCell>
                <TableCell align="right">Action</TableCell>

                {/* Add more table headers for additional inmate properties */}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">
                    <ButtonBase onClick={() => handleOpenDialog(row)}>
                      {row.inmate_name}
                    </ButtonBase>
                  </TableCell>
                  <TableCell align="right"><Avatar alt="Remy Sharp" src={row.imagePath} /></TableCell>
                  {/* <TableCell align="right">{row.social_security}</TableCell> */}
                  <TableCell align="right">{row.bookingDate}</TableCell>
                  <TableCell align="right">{row.reg_officer}</TableCell>
                  <TableCell align="right">{row.booking_time}</TableCell>
                  <TableCell align="right">{row.arrest_location}</TableCell>
                  <TableCell align="right">{row.offence_category}</TableCell>
                  <TableCell align="right">{row.belongings}</TableCell>
                  <TableCell align="right">
              <Edit onClick={() => handleUpdate(row._id)} /> {/* Edit icon with onClick handler */}
              <Delete onClick={() => handleDelete(row._id)} /> {/* Delete icon with onClick handler */}
            </TableCell>

                  {/* <TableCell component="th" scope="row">
                    {row.inmate_name}
                  </TableCell>
                  <TableCell align="right">{row.eye_color}</TableCell>
                  <TableCell align="right">{row.Offence}</TableCell> */}
                  {/* Display more inmate properties in the respective table cells */}
                </TableRow>
              ))}
               </TableBody>
          </Table>
        </TableContainer>
      </Box>


{
  selectedInmate && <div>
   <BootstrapDialog
  onClose={handleCloseDialog}
  aria-labelledby="customized-dialog-title"
  open={openDialog}
>
  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
    {selectedInmate.inmate_name}
  </BootstrapDialogTitle>
  <DialogContent dividers>
    <Box display="flex" alignItems="center" marginBottom={2}>
      <Avatar
        alt={selectedInmate.inmate_name}
        src={selectedInmate.imagePath}
        sx={{ width: 100, height: 100, marginRight: 2 }}
      />
      <Box>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Age: {selectedInmate.date_of_birth}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Ethnicity: {selectedInmate.ethnicity}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Height: {selectedInmate.height}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Weight: {selectedInmate.weight}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Gender: {selectedInmate.gender}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          SSN: {selectedInmate.social_security}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Inmate Nos: {selectedInmate.inmate_number}
        </Typography>
      </Box>
    </Box>
    <Typography variant="body2" gutterBottom style={{ color: 'grey' }}>
      {selectedInmate.description}
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={toggleUpload}>Upload Inmate Photo</Button>
  </DialogActions>
  {isUploadVisible && (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <IconButton onClick={handleClick}>
        <Popup
          trigger={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-upload"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9e9e9e"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <polyline points="7 9 12 4 17 9" />
              <line x1="12" y1="4" x2="12" y2="16" />
            </svg>
          }
          position="bottom center"
        >
          Upload existing picture
        </Popup>
      </IconButton>
      <label>
        {preview ? (
          <img src={url} width="80px" height="80px" alt="" />
        ) : (
          <img src={face} width="80px" height="80px" alt="" />
        )}
        <input
    type="file"
    name="images"
    accept=".jpg,.png,.jpeg"
    ref={hiddenFileInput}
    onChange={handleChange}
    style={{ display: 'none' }}
        />
      </label>
      <Button variant="contained" color="primary" onClick={onSubmitPhoto} >
        Submit
      </Button>
    </Box>
  )}
</BootstrapDialog>


</div>

}

    </>
  );
};

export default function MainPage() {
  return (
    <div>
      <h1>Main Page Content</h1>
      <FilterableTable />
      
    </div>
  );
}

