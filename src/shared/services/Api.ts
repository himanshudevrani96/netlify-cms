import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { BASE_URL } from "../constants/constant";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "BASE_URL" }),
  endpoints: () => ({}),
});
