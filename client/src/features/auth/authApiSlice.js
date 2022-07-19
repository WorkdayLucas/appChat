import { apiSlice } from "../app/apiSlice";
import { setIsLoading } from "../ui/uiSlice";
import { setCredentials } from "./authSlice";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'auth/login',
                method: 'POST',
                body: {...credentials}
            })
           
        }),
        getUserAuth: builder.query({
            query: () => "/auth/user",
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
              dispatch(setIsLoading(true));
              try {
                const { data } = await queryFulfilled;
                console.log("data: ")
                console.log(data)
                dispatch(
                  setCredentials({
                    user: data.user,
                    accessToken: data.accessToken,
                    authFetched: true,
                  })
                );
                dispatch(setIsLoading(false));
              } catch (error) {
                dispatch(
                  setCredentials({
                    user: null,
                    accessToken: null,
                    authFetched: true,
                  })
                );
                dispatch(setIsLoading(false));
                console.log("Error fetching user");
              }
            },
          }),
    })
})

export const {
    useLoginMutation,
    useGetUserAuthQuery,
} = authApiSlice