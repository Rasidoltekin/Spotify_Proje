import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSpotifyData } from './store/features/albums/albumsThunks';
import MainRoutes from './routes/MainRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpotifyData());
  }, [dispatch]);

  return <MainRoutes />;
}

export default App;