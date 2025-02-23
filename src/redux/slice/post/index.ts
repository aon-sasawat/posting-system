import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreatePostRequest, UpdatePostRequest } from "@/types/request";
import {
  CreatePostResponse,
  DeletePostResponse,
  GetAllPostsResponse,
  GetPostByIdResponse,
  GetPostsByUserIdResponse,
  UpdatePostResponse,
} from "@/types/response";

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
    getPostByUserId: builder.query<GetPostsByUserIdResponse, string>({
      query: (userId) => `/posts/user/${userId}`,
    }),
    createPost: builder.mutation<CreatePostResponse, CreatePostRequest>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
    }),
    updatePost: builder.mutation<UpdatePostResponse, UpdatePostRequest>({
      query: (body) => ({
        url: `/posts/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),
    deletePost: builder.mutation<DeletePostResponse, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useGetPostByUserIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
