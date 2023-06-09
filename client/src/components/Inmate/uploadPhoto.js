import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import {Popup} from 'semantic-ui-react';
import face from '../../assets/img/face-0.jpg';
import Button from '@mui/material/Button';
import axios from 'axios';

const UploadPicture = () => {
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();
  const { selectedInmate, isLoading } = useSelector((state) => state.inmates);
  const [url, setUrl] = useState('');
  const [resume, setResume] = useState('');
  const [preview, setPreview] = useState(false);
  const [isUploadVisible, setUploadVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    const url = URL.createObjectURL(fileUploaded);
    setUrl(url);
    setResume(fileUploaded);
    setPreview(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('images', resume);
    setIsActive(true);
    if (formData && resume) {
      dispatch({ type: 'SET_LOADING', payload: true });
      axios
        .post(`/api/photo/resume-images/${selectedInmate.inmate_number}`, formData)
        .then(
          (res) => {
            alert('Submitted successfully!');
            setIsActive(true);
          },
          (err) => {
            if (err.response.status === 500) alert(err.response.data);
          }
        )
        .finally(() => {
          dispatch({ type: 'SET_LOADING', payload: false });
        });
    } else {
      alert('Please select a file!');
    }
  };

  return (
    <>
      {isUploadVisible && (
        <Grid xs={12} container style={{ marginRight: '20px' }}>
          <Grid md={3}>
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
          </Grid>

          <label>
            {preview ? (
              <img src={url} width="80px" height="80px" alt="" />
            ) : (
              <img src={face} width="80px" height="80px" alt="" />
            )}{' '}
            <div style={{ color: 'gray' }}>
              <p>{resume.name ? resume.name : 'jpg,jpeg,png'}</p>
            </div>
          </label>

          <label>
            <input
              type="file"
              name="images"
              accept=".jpg,.png,.jpeg"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
          </label>
        </Grid>
      )}
      <br />
      <br />
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          color="secondary"
          disabled={isLoading}
          onClick={onSubmit}
        >
          Submit
          {isLoading}
        </Button>
      </div>
    </>
  );
};

export default UploadPicture;
