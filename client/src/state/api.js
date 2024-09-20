import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const api = createApi({
  baseQuery: { baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL },
  reducerPath: "api",
  tagTypes: [],
  endpoints: () => ({}),
});

export const {} = api;
