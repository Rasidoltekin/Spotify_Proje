import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongCard from '../components/SongCard';


function Home() {
  const { searchTerm } = useSelector((state)=> state.search);
  const { playlists, recentlyPlayed, recommended } = useSelector((state) => state.albums);

 if (searchTerm !== '') {
  const allItems = [...playlists,...recentlyPlayed,...recommended];
  const filteredItems = allItems.filter((item)=>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <Box>
    <Typography variant="h5" sx={{ mb:2}}>
      Arama Sonuçları
    </Typography>

    {filteredItems.length === 0 && (
      <Typography variant="body2" sx={{ color:"#b3b3b3'"}}>
        "{searchTerm}" için sonuç bulunamadı.
      </Typography>
    )}

    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap:2}}>
      {filteredItems.map((item, index) => (
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



  return(
    <Box>
      <Typography variant="h5" sx={{ mb:3, ml:4}}>
        Yakında Çalanlar
      </Typography>
      <Box sx={{ display:'flex', gap: 2,  flexWrap: 'wrap', mb:4, ml:4,}}>
        {recentlyPlayed.map((item, index)=> (
          <SongCard
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          queue={recentlyPlayed}
          index={index}
        />
        ))}
      
    </Box>

    
      <Typography variant="h5" sx={{ mb:3, ml:4}}>
        Tavsiye Edilenler 
      </Typography>
      <Typography variant="body2" sx={{ color:'#b3b3b3', mb:2, ml:4}}>
        Sevdiğin her şeyden biraz dinle.
      </Typography>
      <Box sx={{ display:'flex', gap: 2,  flexWrap: 'wrap', mb:4, ml:4}}>
        {recommended.map((item, index)=> (
          <SongCard
          key={index}
        title={item.title}
        subtitle={item.description}
        image={item.image}
        queue={recommended}
        index={index}
        />
        ))}
    </Box>
    </Box>


  );
}

export default Home;