import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const ThinNavbar = styled(AppBar)`
  background-color: #36454F;
  height: 30px;
`;

const TabsContainer = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const TabTypography = styled(Typography)`
  && {
    font-size: 14px;
    color: #fff;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <ThinNavbar position="static">
   <TabsContainer>
  <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
    <TabTypography variant="body1" style={{ textTransform: 'lowercase' }}>Services</TabTypography>
    <TabTypography variant="body1" style={{ textTransform: 'lowercase' }}>Pricing</TabTypography>
    <TabTypography variant="body1" style={{ textTransform: 'lowercase' }}>About</TabTypography>
  </div>
</TabsContainer>

    </ThinNavbar>
  );
};

export default Header;

