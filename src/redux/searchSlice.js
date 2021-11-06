import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text:'',
    responseData:[]
}
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearchObj: (state, action) => {
            if(action.payload.text == undefined){
                return state = initialState
            }else{
                return state = action.payload
            }
          
        },        
    },
})

export const { addSearchObj } = searchSlice.actions

export default searchSlice.reducer