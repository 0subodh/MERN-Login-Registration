import { apiSlice } from '../api/apiSlice';

const URL_USERS = '/users';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${URL_USERS}/login`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
