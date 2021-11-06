import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.push(action.payload);
        },
        removeFromFavorite: (state, action) => {
            let index = state.findIndex(item => { return item.definition === action.payload.definition });
            state.splice(index, 1);
        },

    },
})

export const { addToFavorite,removeFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer