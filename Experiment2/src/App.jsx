import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Toolbar, useMediaQuery } from '@mui/material';
import { getTheme } from './theme/theme';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';

function App() {
  const [mode, setMode] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = getTheme(mode);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleTheme = () => setMode(prev => prev === 'light' ? 'dark' : 'light');
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Navbar onToggleSidebar={toggleSidebar} />
        <Sidebar open={sidebarOpen} variant={isMobile ? "temporary" : "persistent"} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <LandingPage />
          <Dashboard />
          <AdminPanel mode={mode} toggleTheme={toggleTheme} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;