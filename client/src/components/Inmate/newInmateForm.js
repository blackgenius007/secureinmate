import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Grid, Button, TextField, Typography } from '@mui/material';
import { registerInmate } from '../InmateServices/inmateSlice';


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  overflowX: 'hidden', // Remove side scroll
};

const formStyle = {
  width: '100%',
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const smallInputStyle = {
  width: '200px',
};

const NewInmates = () => {
  const initialValues = {
    inmate_name: '',
    dateOfBirth: '',
    gender: '',
    socialSecurityNumber: '',
    raceEthnicity: '',
    nationality: '',
    homeAddress: '',
    contactInformation: '',
    height: '',
    weight: '',
    eyeColor: '',
    hairColor: '',
    distinguishingMarks: '',
    disabilities: '',
    bookingDateTime: '',
    bookingNumber: '',
    bookingOfficer: '',
    arrestingAgency: '',
    arrestingOfficer: '',
    reasonForArrest: '',
    arrestDate: '',
    arrestLocation: '',
    arrestJurisdiction: '',
  };

  const { user } = useSelector((state) => state.auth);
  // const { message } = useSelector((state) => state.inmate);

 
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const inmateId = user.data._id;
    // Handle form submission
    console.log(user.data._id);
    // Dispatch registerInmate action
    dispatch(registerInmate({ inmateData: values, inmateId }));
    alert('submit successful!!')
  };
  return (
    <Fragment>
      <h2 style={{ color: 'blue' }}>NEW INMATE BOOKING FORM</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
        {/* {message && (
        <div className={message.type === 'success' ? 'success' : 'error'}>
          {message.text}
        </div>
      )} */}
          <Grid container component="main" maxWidth="xs" style={containerStyle}>
            <Typography component="h1" variant="h5">
              Inmate Booking Form
            </Typography>
            <Grid container spacing={2} style={formStyle}>
              <Grid item xs={12} sm={4} style={columnStyle}>
                <div style={inputContainerStyle}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="inmate_name"
                    label="Full Name"
                    name="inmate_name"
                  />

                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    name="birthday"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ width: '100%', height: '20%' }} // Adjust the width as per your requirement
                  />
                  {/* <Field
                  as={TextField}
                  variant="outlined"
                  size="small"
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  name="dateOfBirth"
                /> */}
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="gender"
                    label="Gender"
                    name="gender"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="socialSecurityNumber"
                    label="Social Security Number"
                    name="socialSecurityNumber"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="raceEthnicity"
                    label="Race/Ethnicity"
                    name="raceEthnicity"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="nationality"
                    label="Nationality"
                    name="nationality"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="homeAddress"
                    label="Home Address"
                    name="homeAddress"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="contactInformation"
                    label="Contact Information"
                    name="contactInformation"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={4} style={columnStyle}>
                <div style={inputContainerStyle}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="height"
                    label="Height"
                    name="height"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="weight"
                    label="Weight"
                    name="weight"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="eyeColor"
                    label="Eye Color"
                    name="eyeColor"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="hairColor"
                    label="Hair Color"
                    name="hairColor"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="distinguishingMarks"
                    label="Distinguishing Marks"
                    name="distinguishingMarks"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="disabilities"
                    label="Physical Disabilities or Medical Conditions"
                    name="disabilities"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="bookingDateTime"
                    label="Booking Date and Time"
                    name="bookingDateTime"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="bookingNumber"
                    label="Booking Number"
                    name="bookingNumber"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={4} style={columnStyle}>
                <div style={inputContainerStyle}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="bookingOfficer"
                    label="Booking Officer's Name or Badge Number"
                    name="bookingOfficer"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="arrestingAgency"
                    label="Arresting Agency"
                    name="arrestingAgency"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="arrestingOfficer"
                    label="Arresting Officer's Name"
                    name="arrestingOfficer"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="reasonForArrest"
                    label="Reason for Arrest"
                    name="reasonForArrest"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id=" arrestDate"
                    label="Arrest Date and Time"
                    name=" arrestDate"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="arrestLocation"
                    label="Arrest Location"
                    name="arrestLocation"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="arrestJurisdiction"
                    label="Court or Jurisdiction Issuing the Arrest Warrant"
                    name="arrestJurisdiction"
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    size="small"
                    fullWidth
                    id="personalItems"
                    label="List of personal Belongings"
                    name="personalItems"
                  />
                </div>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Submit
            </Button>
          </Grid>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default NewInmates;
