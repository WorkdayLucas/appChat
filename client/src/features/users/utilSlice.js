import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  name: "util",
  initialState: { roomToCall: "", switchToRefetchtContactList: false, LoginSinupOption: "login" },
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
    
  },
});

export const { callRoomOption, refecthContactList, setLoginSinupRender } = utilSlice.actions;
export default utilSlice.reducer;

export const selectRoomToCall = (state) => state.util.roomToCall;
export const selectSwitchContactList = (state) => state.util.switchToRefetchtContactList;
export const selectLoginSinupOption = (state) => state.util.LoginSinupOption;
