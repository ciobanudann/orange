import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetBookVolumeResponse,
  GetBookVolumesResponse,
} from "../types/bookstore.type";

export const bookstoreApi = createApi({
  reducerPath: "bookstoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/v1" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getVolumes: builder.query<GetBookVolumesResponse, string>({
      query: (q: string) => {
        return {
          url: "/volumes",
          params: { q },
        };
      },
    }),
    getVolumeById: builder.query<GetBookVolumeResponse, string>({
      query: (id: string) => {
        return {
          url: `/volumes/${id}`,
        };
      },
    }),
  }),
});

export const { useGetVolumesQuery, useGetVolumeByIdQuery } = bookstoreApi;
