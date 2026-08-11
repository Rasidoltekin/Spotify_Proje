import { useSelector, useDispatch} from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { ListItemIcon } from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { playTrack } from '../store/features/player/playerSlice';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SpotifyLogo from '../assets/spotify-logo.svg';

function Sidebar( { mobileOpen, onClose} ) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    const { playlists} = useSelector((state)=> state.albums);

    
    const {items} = useSelector((state) => state.library);
    const dispatch = useDispatch();
    const [sidebarSearch, setSidebarSearch] = useState('');

    
    const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(sidebarSearch.toLowerCase())
);
    const navigate = useNavigate();
    const location = useLocation();



    const sidebarContent = (
          <Box 
            sx={{
                width: 240,
                backgroundColor: '#030303',
                color: '#fff',
                minHeight: '100%',
                py: 2,
                
            }}
            >
                
        <Box sx={{
            ml:3,
            mt:5,
            mb:5,
        }}>
            <img
            src={SpotifyLogo}
            alt="Spotify"
            style={{ height: 42, width: 148,filter: 'invert(1) brightness(2)' }}
          />
        </Box>

            <List>
                <ListItem onClick={() => navigate('/')}
                    sx={{
                        cursor:'pointer',
                        borderLeft: location.pathname === '/'? '4px solid #1db954' : '4px solid transparent',
                        backgroundColor: location.pathname === '/' ? '#282828' : 'transparent',

                    }}
                    >

                   <ListItemIcon>
                        <HomeIcon sx={{ color: location.pathname === '/' ? '#1db954' : '#fff' }} />
                   </ListItemIcon>
                    <ListItemText
                         primary="Giriş"
                        sx={{ color: location.pathname === '/' ? '#1db954' : '#fff' }}
                         />
                   </ListItem>

             <ListItem
           onClick={() => navigate('/search')}
                sx={{
                    cursor: 'pointer',
                    borderLeft: location.pathname === '/search' ? '4px solid #1db954' : '4px solid transparent',
                    backgroundColor: location.pathname === '/search' ? '#282828' : 'transparent',
                }}
                >
                <ListItemIcon>
                    <SearchIcon sx={{ color: location.pathname === '/search' ? '#1db954' : '#fff' }} />
                </ListItemIcon>
                <ListItemText
                    primary="Gözat"
                    sx={{ color: location.pathname === '/search' ? '#1db954' : '#fff' }}
                />
                </ListItem>


                <ListItem
                onClick={() => navigate('/library')}
                sx={{
                    
                    cursor: 'pointer',
                    borderLeft: location.pathname === '/library' ? '4px solid #1db954' : '4px solid transparent',
                    backgroundColor: location.pathname === '/library' ? '#282828' : 'transparent',
                }}
                >
                <ListItemIcon>
                    <LibraryMusicIcon sx={{ color: location.pathname === '/library' ? '#1db954' : '#fff' }} />
                </ListItemIcon>
                <ListItemText
                    primary="Kitaplık"
                    sx={{ color: location.pathname === '/library' ? '#1db954' : '#fff' }}
                />
                </ListItem>


            </List>

            <Box sx={{ height: 50 }} />

            <Typography variant="overline" sx= {{ pl:2, mt:6}}>
            Çalma Listelerim 
            </Typography>

           <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#242424',
                borderRadius: 20,
                px: 2,
                py: 0.5,
                mx: 2,
                mt: 1,
                mb: 1,
            }}
            >
                <SearchIcon sx={{ color:'#b3b3b3', mr: 1, fontSize: 18 }} />
                <InputBase
                placeholder="Ara"
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                sx={{ color: '#fff', width: '100%', fontSize: 14 }}
                />
            </Box>
        





        <List>
    {filteredItems.length === 0 && (
        <Typography variant="body2" sx={{ color: 'b3b3b3', pl:2 }}>
            Henüz şarkı eklemedin.
        </Typography>
    )}
    {filteredItems.map((item,index) => (
        <ListItem
        key={index} 
        onClick={() => dispatch(playTrack({ queue: filteredItems, index }))}
        sx={{ cursor: 'pointer'}}
        >
            <ListItemText primary={item.title} />
        </ListItem>
    ))}
</List>
        </Box>



        
    );

    if (isMobile) {
        return (
            <Drawer
                open={mobileOpen}
                onClose={onClose}
                sx={{ '& .MuiDrawer-paper': { backgroundColor: '#000' } }}
            >
                {sidebarContent} 
            </Drawer>
            );
    }
    return sidebarContent;

}

export default Sidebar;