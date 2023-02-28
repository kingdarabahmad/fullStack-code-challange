import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query"
import { imageApi } from "./services/apiSlice";

export const store=configureStore({
    reducer:{
        [imageApi.reducerPath]:imageApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(imageApi.middleware)
})

setupListeners(store.dispatch)