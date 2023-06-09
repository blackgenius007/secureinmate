import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ServiceCard = ({ title, description }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const ServicesSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          title="Profile Management"
          description="The system provides tools for creating and maintaining inmate profiles, including personal details, booking information,e.t.c"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          title="Case Management"
          description="It assists in managing and tracking inmate cases, including charges, court appearances, sentencing, and release dates."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          title="Visitation Management"
          description="The system facilitates scheduling and tracking inmate visitations, allowing visitors to request and receive approval for visits."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          title="Reporting and Analytics"
          description="The system provides reporting capabilities to generate statistical data, track trends, and aid in decision-making."
        />
      </Grid>
    </Grid>
  );
};

export default ServicesSection;
