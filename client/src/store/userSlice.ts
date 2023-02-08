import { createSlice } from "@reduxjs/toolkit";

interface userType {
  name: string;
  email: string;
  avatar: string;
}

interface userState {
  userInfo: userType | undefined;
}

const initialState: userState = {
  userInfo: undefined,
  // userInfo: {
  //   name: "111",
  //   email: "22",
  //   avatar: "333",
  // },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: state => {
      state.userInfo = undefined;
    },
  },
  extraReducers(builder) {},
});

export default userSlice.reducer;
