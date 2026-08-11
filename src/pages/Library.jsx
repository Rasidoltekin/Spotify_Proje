import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongCard from '../components/SongCard';

function Library() {
  const { items } = useSelector((state) => state.library);

  if (items.length === 0) {
    return(
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Kitaplığın 
        </Typography>
        <Typography variant="body2" sx={{ color:'#b3b3b3' }}>
          Henüz kütüphanene şarkı eklemedin. Bir şarkıyı beğenerek buraya ekleyebilirsin.
        </Typography>
      </Box>
    );
  }

  return ( 
    <Box >
      <Typography variant="h5" sx={{ mb: 2}}>
        Kitaplığın 
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {items.map((item, index) =>(
          <SongCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            queue={items}
            index={index}
            />
        ))}
    </Box>
    </Box>
  );
}




export default Library;