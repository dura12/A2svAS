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
    getSuccessStory: builder.query({
        query: () => ({
          url: "/success-stories",
          method: "GET",
        }),
      }),
    getDescription: builder.query({
      query: (id: string ) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllJobsQuery, useGetSuccessStoryQuery , useGetDescriptionQuery } = JobsApi;