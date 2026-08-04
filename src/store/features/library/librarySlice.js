import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
    name: 'library',
    initialState: {
        items: [],
    },

    reducers: {
        toggleLibrary: (state,action) => {
            const song = action.payload;
            const exists = state.items.find((item) => item.title === song.title);

            if (exists) {
                state.items = state.items.filter((item)=> item.title !== song.title);
            }else{
                state.items.push(song);
            }

        },
    },
});


export const { toggleLibrary } =librarySlice.actions;
export default librarySlice.reducer;

