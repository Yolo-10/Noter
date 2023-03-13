import { createSlice } from "@reduxjs/toolkit";
import { removeToken } from "@/utils/token";
import { userStateType } from "@/utils/types";

const initialState: userStateType = {
  userInfo: undefined,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userInfo = action.payload.user;
    },
    removeUser: state => {
      state.userInfo = undefined;
      removeToken();
    },
  },
  extraReducers() {},
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
