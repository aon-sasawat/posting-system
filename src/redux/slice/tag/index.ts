import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetAllTagsResponse } from "@/types/response";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const tagApi = createApi({
  reducerPath: "tagApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllTags: builder.query<GetAllTagsResponse, void>({
      query: () => "/tags",
    }),
  }),
});

export const { useGetAllTagsQuery } = tagApi;
