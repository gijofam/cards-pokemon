import {createSlice} from '@reduxjs/toolkit'

const nameMaestro = createSlice({
    name: 'nameMaestro',
    initialState: '',
    reducers:{
        setNameMaestro: (state, action) => action.payload

    }
})

export default nameMaestro.reducer
export const {setNameMaestro} = nameMaestro.actions