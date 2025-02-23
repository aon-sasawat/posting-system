import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignInResponse } from "@/types/response";

interface UserState {
  id: string | null;
  username: string | null;
}

const initialState: UserState = {
  id: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      if (action.payload.id && action.payload.username) {
        state.id = action.payload.id;
        state.username = action.payload.username;
        localStorage.setItem("userId", action.payload.id);
        localStorage.setItem("username", action.payload.username);
      } else {
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
      }
    },
  },
});

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    userSignIn: builder.mutation<SignInResponse, string>({
      query: (username) => ({
        url: "/users/auth",
        method: "POST",
        body: { username },
      }),
    }),
  }),
});

export const { useUserSignInMutation } = userApi;
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
