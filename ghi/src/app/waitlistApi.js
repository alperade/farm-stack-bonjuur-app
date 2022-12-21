import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const waitlistApi = createApi({
  reducerPath: "waitlistemails",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BONJUUR_API_HOST,
  }),
  tagTypes: ["WaitListEmails"],
  endpoints: (builder) => ({
    getWaitListEmails: builder.query({
      query: () => {
        return {
          url: `/api/waitlistemails`,
        };
      },
      providesTags: ["WaitListEmails"],
    }),
    addWaitListEmail: builder.mutation({
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        return {
        method: "post",
        url: `/api/waitlistemails`,
        credentials: "include",
        body: data,
        };
        },
      invalidatesTags: ["WaitListEmails"],
    }),
    }),
  });

export const {
  useGetWaitListEmailsQuery,
  useAddWaitListEmailMutation,
} = waitlistApi;
