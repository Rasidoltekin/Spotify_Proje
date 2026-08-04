import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { pauseSong, resumeSong, nextSong, previousSong } from '../store/features/player/playerSlice';
import { toggleLibrary } from '../store/features/library/librarySlice';
import { useState,useEffect } from 'react';
import Slider from '@mui/material/Slider';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';



function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;

}


function Player() {
    const dispatch = useDispatch();
    const {queue, isPlaying, currentIndex} = useSelector((state) => state.player);
    const { items } = useSelector((state) => state.library);

    const [volume,setVolume] = useState(50);

    const [currentTime, setCurrentTime] = useState(0);
    const duration = 180;

    const currentTrack = queue && queue.length > 0 ? queue[currentIndex] : null;

    const isInLibrary = currentTrack
        ? items.some((item) => item.title === currentTrack.title)
        : false;

    
    useEffect(() => {
        if (!isPlaying || !currentTrack) return;

        const interval = setInterval(()=> {
            setCurrentTime((prev)=> {
                if ( prev >= duration) return 0;
                return prev + 1;
            });
        }, 1000);

        return() => clearInterval(interval);

    }, [isPlaying, currentTrack]);


    useEffect(() => {
      setCurrentTime(0);
    }, [currentIndex, queue]);
    



    
    
    const handlePlayPause = () => {
        if (!currentTrack) return;


        if(isPlaying) {
            dispatch(pauseSong());
        } else {
            dispatch(resumeSong());
        }
    };

    const handleNext = () => {
        dispatch(nextSong());
    };

    const handlePrevious = () => {
        dispatch(previousSong());
    };

    const handleToggleLibrary = () => {
        dispatch(toggleLibrary(currentTrack));
    };


    return (
        <Box 
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#181818',
            color: '#fff',
            px: 2,
            py:1,
        }}
        >

        <Box sx={{ display:'flex', alignItems: 'center', gap:1, width: { xs: 100, sm: 150, md: 200 }}}>
            <Box>
                <Typography variant="body2"> {currentTrack?.title}</Typography>
                <Typography variant="caption" sx={{ color: '#b3b3b3'}}>
                    {currentTrack?.subtitle || currentTrack?.description}
                </Typography>
                </Box>
        {currentTrack && (
        <IconButton onClick={handleToggleLibrary} sx={{ color: '#fff' }}>
          {isInLibrary ? <FavoriteIcon sx={{ color: '#1db954' }} /> : <FavoriteBorderIcon />}
        </IconButton>
      )}
      </Box>

      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, flex: 1 }}>
        <Box>
          <IconButton onClick={handlePrevious} sx={{ color: '#fff' }}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton onClick={handlePlayPause} sx={{ color: '#fff' }}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton onClick={handleNext} sx={{ color: '#fff' }}>
            <SkipNextIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', maxWidth: 400 }}>
          <Typography variant="caption" sx={{ color: '#b3b3b3' }}>
            {formatTime(currentTime)}
          </Typography>
          <Slider
            value={currentTime}
            max={duration}
            onChange={(e, newValue) => setCurrentTime(newValue)}
            sx={{ color: '#fff' }}
          />
          <Typography variant="caption" sx={{ color: '#b3b3b3' }}>
            {formatTime(duration)}
          </Typography>
        </Box>
      </Box>

      
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1, width: 200 }}>
        <VolumeUpIcon sx={{ color: '#fff' }} />
        <Slider
          value={volume}
          onChange={(e, newValue) => setVolume(newValue)}
          sx={{ color: '#fff', width: 100 }}
        />
      </Box>
    </Box>
  );
        

}

export default Player;
