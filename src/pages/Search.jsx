import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongCard from '../components/SongCard';


function Search() {
  const { searchTerm } = useSelector((state)=> state.search);
  const { playlists, recentlyPlayed, recommended } =useSelector((state)=>state.albums);

  const allItems = [...playlists, ...recentlyPlayed, ...recommended];

  const filteredItems = allItems.filter((item)=> 
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <Box>
    <Typography variant="h5" sx={{ mb:2 }}>
      Arama Sonuçları
    </Typography>


    {searchTerm === '' && (
      <Typography variant="body2" sx={{ color:'#b3b3b3' }}>
        Aramaya başlamak için yukarıdaki kutuya bir şey yaz.
      </Typography>
    )}


    {searchTerm === '' && filteredItems.length === 0 && (
      <Typography variant="body2" sx={{ color:'#b3b3b3' }}>
        "{searchTerm}" için sonuç bulunamadı.
      </Typography>
    )}


    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {filteredItems.map((item, index)=> (
        <SongCard
            key={index}
            title={item.title}
            subtitle={item.subtitle || item.description}
            image={item.image}
            queue={filteredItems}
            index={index}
          />
      ))}
  </Box>
  </Box>
);

}




export default Search;
