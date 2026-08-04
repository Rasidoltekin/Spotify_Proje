import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/features/search/searchSlice';
import SpotifyLogo from '../assets/spotify-logo.svg';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar( { onMenuClick } ) {

    const dispatch = useDispatch();
    const { searchTerm } = useSelector((state) => state.search);
    const { user } = useSelector((state) => state.albums);

    return (
      <Box
        sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 2,
        py: 1,
        backgroundColor: '#000',
        color: '#fff',
          }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img
            src={SpotifyLogo}
            alt="Spotify"
            style={{ height: 42, filter: 'invert(1) brightness(2)' }}
          />

          <IconButton
            onClick={onMenuClick}
            sx={{ color: '#fff', display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
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

  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar
          src={user?.profile_picture}
          alt={user?.name}
          sx={{ width: 32, height: 32 }}
        />
        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {user?.name}
        </Typography>
</Box>
</Box>
    );
}



export default Navbar;