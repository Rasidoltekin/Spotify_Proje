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
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
          <Navbar onMenuClick={() => setMobileOpen(true)} />

          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              backgroundColor: '#121212',
              color: '#fff',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#535353',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: '#727272',
                },
              },
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>

      <Player />
    </Box>
  );
}

export default MainLayout;