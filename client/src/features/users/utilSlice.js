import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  name: "util",
  initialState: {
    roomToCall: "",
    switchToRefetchtContactList: false,
    LoginSinupOption: "login",
    userListOption: "contactList",
    logErr: {
      userErr: "Email requerido",
      pwdErr: "Contraseña requerida"
    }
  },
  reducers: {
    callRoomOption: (state, action) => {
      state.roomToCall = action.payload;
    },
    refecthContactList: (state, action) => {
      state.switchToRefetchtContactList = !state.switchToRefetchtContactList
    },
    setLoginSinupRender: (state, action) => {
      state.LoginSinupOption = action.payload
    },
    setUserListRender: (state, action) => {
      state.userListOption = action.payload
    },
    setLogErr: (state, action) => {
      state.logErr[action.payload.field] = action.payload.err
    }

  },
});

export const {
  callRoomOption,
  refecthContactList,
  setLoginSinupRender,
  setUserListRender,
  setLogErr
} = utilSlice.actions;
export default utilSlice.reducer;

export const selectRoomToCall = (state) => state.util.roomToCall;
export const selectSwitchContactList = (state) => state.util.switchToRefetchtContactList;
export const selectLoginSinupOption = (state) => state.util.LoginSinupOption;
export const selectUserListOption = (state) => state.util.userListOption;
export const selectLogErr = (state) => state.util.logErr;
