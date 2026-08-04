import { configureStore } from "@reduxjs/toolkit";
import playerReducer from './features/player/playerSlice';
import albumsReducer from './features/albums/albumsSlice';
import searchReducer from './features/search/searchSlice';
import libraryReducer from './features/library/librarySlice';


export const store = configureStore({
  reducer: {
    player: playerReducer,
    albums: albumsReducer,
    search: searchReducer,
    library: libraryReducer,
  },
});

