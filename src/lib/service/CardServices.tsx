// src/services/jobsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const JobsApi = createApi({
  reducerPath: 'JobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com/api' }), 
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
    getDescription: builder.query({
      query: (data: { token: string; id: string }) => ({
        url: `/search/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const { useGetAllJobsQuery, useGetDescriptionQuery } = JobsApi;