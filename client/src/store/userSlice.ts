import { createSlice } from "@reduxjs/toolkit";

interface userType {
  id: number;
  userName: string;
  email: string;
  avatar: string;
  githubId: number;
  realName: string;
  desc: string;
  password: string;
}

interface userState {
  userInfo: userType | undefined;
}

const initialState: userState = {
  userInfo: undefined,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userInfo = action.payload;
      console.log(state.userInfo);
    },
    removeUser: state => {
      state.userInfo = undefined;
    },
  },
  extraReducers() {},
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
