import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/features/search/searchSlice';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@mui/material';

function Navbar( { onMenuClick } ) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { searchTerm } = useSelector((state) => state.search);
    const { user } = useSelector((state) => state.albums);


    const [menuAnchor, setMenuAnchor] = useState(null);
    const open = Boolean(menuAnchor);

    const handleMenuClick = (event) => {
      setMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
      setMenuAnchor(null);
    };


    return (
            <Box
        sx={{
          display: 'flex',
          
          alignItems: 'center',
          px: 2,
          py: 1,
          background: '#121212',
          color: '#fff',
        }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
         

          <IconButton
            onClick={onMenuClick}
            sx={{ color: '#fff', display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        <IconButton
            onClick={() => navigate(-1)}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              width: 32,
              height: 32,
              ml:4,
              mt:4,
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
            }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 14}} />
        
            </IconButton>

            <IconButton
               onClick={() => navigate(1)}
               sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                width:32,
                height:32,
                ml:1,
                mt:4,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
              }}

               >
              <ArrowForwardIosIcon sx={{ fontSize: 14}} />
               </IconButton>
        </Box>
 <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#242424',
          borderRadius: 20,
          px: 2,
          py: 0.5,
          width: { xs: 150, sm: 220, md: 300 },
          ml: '40px',
          mt: '30.56px',
          
        }}
      >
        <SearchIcon sx={{ color: '#b3b3b3', mr: 1 }} />
        <InputBase
          placeholder="Ara..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          sx={{ color: '#fff', width: '100%' }}
        />
      </Box>



  <Box
  onClick={handleMenuClick}
  sx={{ display: 'flex', alignItems: 'center', gap: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 27,
        px: 1,
        py: 0.5,
        ml:'auto',
        mt:4,
        cursor:'pointer',
        

   }}
   >
        <Avatar
          src={user?.profile_picture}
          alt={user?.name}
          sx={{ width: 32, height: 32 }}
        />
        <Typography
          variant="body2"
          noWrap
          sx={{ display: { xs: 'none', sm: 'block' },
          fontFamily: 'Lato, sans-serif',
          fontWeight: 500,
          fontSize: 14,
          color: 'rgba(255, 255, 255, 0.6)',
          maxWidth: 139,
          
          
          }}
        >
          {user?.name}
        </Typography>
</Box>

<Menu
          anchorEl={menuAnchor}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',}}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',}}
          sx={{
            '& .MuiPaper-root': {
            backgroundColor: '#282828',
            color: '#fff',
            mt: 1,
            minWidth: 220,       
            py: 1,
             },
            }}
      >
        <MenuItem onClick={handleClose} sx={{ py: 1.5, fontSize: 15 }}>Profil</MenuItem>
        <MenuItem onClick={handleClose} sx={{ py: 1.5, fontSize: 15 }}>Ayarlar</MenuItem>
        <MenuItem onClick={handleClose} sx={{ py: 1.5, fontSize: 15 }}>Çıkış Yap</MenuItem>
        
      </Menu>
          


</Box>
    );
}



export default Navbar;