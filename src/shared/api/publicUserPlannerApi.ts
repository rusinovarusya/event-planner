import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const publicUserPlannerApi = createApi({
  reducerPath: 'publicUserPlannerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://planner.rdclr.ru/api/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/auth/local/register',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: data
      })
    }),

    existUserByEmail: builder.query({
      query: (email) => `/taken-emails/${email}`
    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: '/auth/local',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: data
      })
    }),
    
    getEventsForPublicUsers: builder.query({
      query: ({
        startDateId,
        endDateId
      }) => `/events?populate=*&filters[dateStart][$gte]=${startDateId}&filters[dateStart][$lte]=${endDateId}`
    }),
  }),
});

export const { 
  useRegisterUserMutation,
  useExistUserByEmailQuery,
  useLoginUserMutation,
  useGetEventsForPublicUsersQuery,
} = publicUserPlannerApi;
