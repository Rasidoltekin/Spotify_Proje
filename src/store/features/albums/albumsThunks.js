import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSpotifyData = createAsyncThunk(
  'albums/fetchSpotifyData',
  async () => {
    const response = await axios.get('/api/spotify.json');
    return response.data;
  }
);