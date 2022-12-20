import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const memberApi = createApi({
  reducerPath: "members",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BONJUUR_API_HOST,
  }),
  tagTypes: ["Members"],
  endpoints: (builder) => ({
    getMembers: builder.query({
      query: () => {
        return {
          url: `/api/members`,
        };
      },
      providesTags: ["Members"],
    }),
    addMember: builder.mutation({
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        data["start_date"] = data.start_date + "T00:00:00.000Z";
        return {
        method: "post",
        url: `/api/members`,
        credentials: "include",
        body: data,
        };
        },
      invalidatesTags: ["Members"],
    }),
    deleteMember: builder.mutation({
      query: (memberId) => {
        return {
          method: "delete",
          url: `/api/members/${memberId}`,
        };
      },
      invalidatesTags: ["Members"],
    }),
    updateMember: builder.mutation({
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        data["start_date"] = data.start_date + "T00:00:00.000Z";
        const memberId = data["id"];
        return {
          method: "put",
          url: `/api/members/${memberId}`,
          credentials: "include",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetMembersQuery,
  useAddMemberMutation,
  useDeleteMemberMutation,
  useUpdateMemberMutation,
} = memberApi;
