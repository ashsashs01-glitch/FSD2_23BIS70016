import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  transition: transform 0.2s;
  &:hover { transform: scale(1.02); }
`;

const Dashboard = () => (
  <Box sx={{ flexGrow: 1, p: 3 }}>
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">Stat Card {item}</Typography>
              <Typography color="textSecondary">Dynamic column adjustment.</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Dashboard;