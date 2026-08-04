import { createSlice } from "@reduxjs/toolkit";
import { fetchSpotifyData } from "./albumsThunks";

const albumSlice= createSlice({
    name:'albums',
    initialState: {
        currentTrack: null,
        playlists: [],
        recentlyPlayed: [],
        recommended: [],
        user: null,
        status: 'idle',
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpotifyData.pending, (state) => {
                state.status = 'loading';
        })
            .addCase(fetchSpotifyData.fulfilled, (state,action) =>{
                state.status = 'succeeded';
                state.currentTrack = action.payload.current_track;
                state.playlists = action.payload.playlists;
                state.recentlyPlayed = action.payload.recently_played;
                state.recommended = action.payload.recommended;
                state.user = action.payload.user;
            })

            .addCase(fetchSpotifyData.rejected, (state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            });
    },

});



export default albumSlice.reducer;
