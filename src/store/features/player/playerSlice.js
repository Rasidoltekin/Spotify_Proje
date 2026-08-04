import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        queue: [],
        currentSong: null,
        isPlaying: false,
        

    },

    reducers:{
       playTrack: (state, action) => {
        const { queue, index } = action.payload;
        state.queue = queue;
        state.currentIndex = index;
        state.isPlaying = true;
       },

        pauseSong: (state) => {
            state.isPlaying = false;
        },

        resumeSong: (state) => {
            state.isPlaying = true;
        },

        nextSong: (state) => {
          if (state.queue.length > 0){
            state.currentIndex = (state.currentIndex+1) % state.queue.length;
          }
        },

        previousSong: (state) => {
          if ( state.queue.length > 0) {
            state.currentIndex = (state.currentIndex - 1 + state.queue.length) % state.queue.length;
        }
    },
},
});

export const {playTrack, pauseSong, resumeSong, nextSong, previousSong} = playerSlice.actions;
export default playerSlice.reducer;