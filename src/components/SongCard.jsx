import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { playTrack } from '../store/features/player/playerSlice';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Box from '@mui/material/Box';


function SongCard({ title, subtitle, image, queue, index}) {
  const dispatch = useDispatch();



  const handleClick = () => {
    dispatch(playTrack({queue, index}));

  };

    return ( 
        <Card 
          onClick= {handleClick}
        sx={{
            width: { xs: 120, sm: 140, md: 160 },
            flexShrink: 0,
            backgroundColor: '#181818',
            borderRadius: 2,
            color: '#fff',
            cursor: 'pointer',
            transition: 'transform 0.2s, background-color 0.2s',
            '&:hover':{
              transform:'scale(1.03)',
              backgroundColor:'#282828',
            },
        }}
        >
          <Box sx={{ position:'relatice'}}>

          
            <CardMedia
            component="img"
            height="160"
            image={image}
            alt={title}
         />

            <IconButton
            sx={{
              position: 'absolute',
            bottom: 8,
            right: 8,
            backgroundColor: '#1db954',
            opacity: 0,
            transform: 'translateY(8px)',
            transition: 'opacity 0.2s, transform 0.2s',
            '.MuiCard-root:hover &': {
              opacity: 1,
              transform: 'translateY(0)',
            },
            '&:hover': {
              backgroundColor: '#1ed760',
            },
            }}
            >

              <PlayArrowIcon sx={{ color:'#000'}}/>
           </IconButton>
        </Box>


         <CardContent>
            <Typography
            variant="subtitle1"
            noWrap
            sx={{ fontWeight: 'bold'}}
          >
            {title}
            </ Typography>
            <Typography
            variant="body2"
            noWrap
            sx={{ color: '#b3b3b3'}}
          >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SongCard;