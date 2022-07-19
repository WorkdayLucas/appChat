import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null, authFetched: false }, //cambio 1 authFetched: false
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload;
            console.log("despacha setCredential", accessToken)
            state.user = {...user};
            state.token = accessToken 
            // || state.token; cambio 2
            state.authFetched = true;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
            state.authFetched = false;
        },
        getState: (state) => state
    }
})

export const {setCredentials, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user 
export const selectCurrentToken = (state) => state.auth.token
export const selectAuthFetched = (state) => state.auth.authFetched // cambio 3