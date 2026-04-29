import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Box } from '@mui/material';

const Sidebar = ({ open, variant }) => (
  <Drawer
    variant={variant}
    open={open}
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {['Dashboard', 'Analytics', 'Settings'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
);

export default Sidebar;