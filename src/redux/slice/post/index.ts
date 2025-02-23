import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetAllPostsResponse } from "@/types/response";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<GetAllPostsResponse, void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = postApi;
