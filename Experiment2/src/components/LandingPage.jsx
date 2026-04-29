import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';

const LandingPage = () => (
  <Container sx={{ py: 8 }}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h2" gutterBottom>Welcome to Our Site</Typography>
        <Typography variant="body1" paragraph>
          This section stacks on mobile and appears side-by-side on desktop.
        </Typography>
        <Button variant="contained" color="primary">Get Started</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ bgcolor: 'primary.light', height: 300, borderRadius: 2 }} />
      </Grid>
    </Grid>
  </Container>
);

export default LandingPage;