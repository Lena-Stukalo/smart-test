import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, void>({
      query: () => `/users`,
      providesTags: ["Users"],
    }),

  }),

});

export const {
  useGetAllUsersQuery,
} = usersApi;
