import React from 'react';
import InmateUpdateForm from './inmateUpdateForm';  
// import inmateImage from 'path/to/your/inmate-image.jpg';  
import { Box } from '@mui/material';

const TwoColumnComponent = () => {
  return (
    <Box sx={{ display: 'flex', maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
      {/* Left Column - Image */}
      <Box sx={{ flex: 1, marginRight: '20px' }}>
        <img src={'https://cdn.pixabay.com/photo/2017/07/10/23/49/club-2492011_1280.jpg' } alt="Inmate" style={{ width: '100%', borderRadius: '10px' }} />
      </Box>

      {/* Right Column - Inmate Update Form */}
      <Box sx={{ flex: 1 }}>
        <InmateUpdateForm />
      </Box>
    </Box>
  );
};

export default TwoColumnComponent;
