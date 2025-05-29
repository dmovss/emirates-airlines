import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FlightSearchParams, FlightResult } from '../features/flights/types'

export const api = createApi({
  reducerPath: 'emiratesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    searchFlights: builder.query<FlightResult[], FlightSearchParams>({
      query: (params) => ({
        url: '/flights/search',
        method: 'POST',
        body: params,
      }),
    }),
    getDestinations: builder.query({
      query: () => '/destinations',
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const {
  useSearchFlightsQuery,
  useGetDestinationsQuery,
  useLoginMutation,
} = api