import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar onMenuClick={() => setMobileOpen(true)}  />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)}  />
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2, backgroundColor: '#121212', color: '#fff' }}>
          <Outlet />
        </Box>
      </Box>
      <Player />
    </Box>
  );
}



export default MainLayout;