import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/app/apiSlice";
import uiSliceReducer from "../features/ui/uiSlice"
import utilSlice from "../features/users/utilSlice";




export const store = configureStore({
   reducer: {
    auth: authReducer,
    ui: uiSliceReducer,
    util : utilSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
   },
   middleware: getDefaultMiddleware =>
   getDefaultMiddleware().concat(apiSlice.middleware),
   devTools:true
})

