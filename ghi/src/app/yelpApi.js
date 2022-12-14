import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const yelpApi = createApi({
  reducerPath: "restaurants",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FOMORE_API_HOST,
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: (search) =>
        `api/restaurant_search/?location=${search.location}&date=${search.date}T00:00:00.000Z&itinerary_id=${search.itineraryId}`,
    }),
    getAttractions: builder.query({
      query: (search) =>
        `api/attraction_search/?location=${search.location}&date=${search.date}T00:00:00.000Z&itinerary_id=${search.itineraryId}`,
    }),
    getEvents: builder.query({
      query: (search) =>
        `api/event_search/?location=${search.location}&date=${search.date}T00:00:00.000Z&itinerary_id=${search.itineraryId}`,
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetAttractionsQuery,
  useGetEventsQuery,
} = yelpApi;
