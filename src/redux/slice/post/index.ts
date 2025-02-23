import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreatePostRequest } from "@/types/request";
import { CreatePostResponse, GetAllPostsResponse, GetPostByIdResponse } from "@/types/response";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<GetAllPostsResponse, void>({
      query: () => "/posts",
    }),
    getPostById: builder.query<GetPostByIdResponse, string>({
      query: (id) => `/posts/${id}`,
    }),
    createPost: builder.mutation<CreatePostResponse, CreatePostRequest>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = postApi;
