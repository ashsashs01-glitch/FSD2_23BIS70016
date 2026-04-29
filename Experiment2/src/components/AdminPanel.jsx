import React from 'react';
import { Box, Paper, Grid, Typography, Switch, FormControlLabel } from '@mui/material';

const AdminPanel = ({ mode, toggleTheme }) => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>Admin Control</Typography>
    <FormControlLabel
      control={<Switch checked={mode === 'dark'} onChange={toggleTheme} />}
      label={`${mode === 'dark' ? 'Dark' : 'Light'} Mode`}
    />
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, height: '200px' }}>Main Content Panel</Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, height: '200px' }}>Side Activity Panel</Paper>
      </Grid>
    </Grid>
  </Box>
);

export default AdminPanel;