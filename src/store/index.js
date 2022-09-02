import { configureStore } from "@reduxjs/toolkit";
import nameMaestro from './slices/nameMaestro.slice'

export default configureStore({
    reducer:{
        nameMaestro,
    }
})