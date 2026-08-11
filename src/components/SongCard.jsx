import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { playTrack, pauseSong, resumeSong } from '../store/features/player/playerSlice';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Box from '@mui/material/Box';
import { useState } from 'react';


function SongCard({ title, subtitle, image, queue, index}) {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);

  const { queue: currentQueue, currentIndex, isPlaying } =useSelector((state)=> state.player);

  const isThisTrack =
    currentQueue &&
    currentQueue.length > 0 &&
    currentIndex === index &&
    currentQueue[currentIndex]?.title === queue?.[index]?.title;
    
    const isThisPlaying = isThisTrack && isPlaying;


  const handleClick = () => {
    if (isThisTrack) {
      if (isPlaying){
        dispatch(pauseSong());
      } else {
        dispatch(resumeSong());
      }
    } else {
      dispatch(playTrack({queue, index}));
    }
    

  };

    return ( 
        <Card 
          onClick= {handleClick}
        sx={{
            width: { xs: 120, sm: 140, md: 203},
            height: { xs: 175, sm: 215, md: 273},
            flexShrink: 0,
            backgroundColor: '#181818',
            borderRadius: 2,
            color: '#fff',
            cursor: 'pointer',
            p: '16px',
            overflow: 'hidden',      
             boxSizing: 'border-box',
            transition: 'transform 0.2s, background-color 0.2s',
            '&:hover':{
              transform:'scale(1.03)',
              backgroundColor:'#282828',
            },
        }}
        >
          <Box sx={{ position:'relative'}}>

            {imageError ? (
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius:'4px',
                  backgroundColor:'#282828',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  textAlign:'center',
                  p:1,


                }}
                >
                  <Typography variant=  "caption" sx={{ color: '#b3b3b3' }}>
                    Görsel yüklenemedi

                  </Typography>
                  </Box>
            ) : (
              <CardMedia
                component='img'
                sx={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: '4px',
                  objectFit: 'cover',
                }}
                image={image}
                alt={title}
                onError={() => setImageError(true)}
                />
            )}
            

            <IconButton
             onClick={(e) => {
              e.stopPropagation();
              handleClick();
             }}
            sx={{
              position: 'absolute',
            bottom: 8,
            right: 8,
            backgroundColor: '#1db954',
            opacity: isThisPlaying ? 1 : 0,
            transform: isThisPlaying ? 'translateY(0)' : 'translateY(8px)',
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
              {isThisPlaying ? (
                <PauseIcon sx={{ color:'#000'}}/>
              ) : (

              <PlayArrowIcon sx={{ color:'#000'}}/>
              )}
           </IconButton>
        </Box>


         <CardContent sx={{ p: '12px 0 0 0' }}> 
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