import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateCommentRequest } from "@/types/request";
import { CreateCommentResponse } from "@/types/response";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    createComment: builder.mutation<CreateCommentResponse, CreateCommentRequest>({
      query: (body) => ({
        url: "/comments",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateCommentMutation } = commentApi;
