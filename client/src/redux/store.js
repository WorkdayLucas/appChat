import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/app/apiSlice";
import uiSliceReducer from "../features/ui/uiSlice"


export const store = configureStore({
   reducer: {
    auth: authReducer,
    ui: uiSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
   },
   middleware: getDefaultMiddleware =>
   getDefaultMiddleware().concat(apiSlice.middleware),
   devTools:true
})

