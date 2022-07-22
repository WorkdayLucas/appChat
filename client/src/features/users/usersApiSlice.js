import {apiSlice} from '../app/apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
       searchUsers: builder.query({
        query({search, userId}){
            return { url: `/users?search=${search}&userId=${userId}` }
        }
       }),
       getContactList: builder.query({
        query(userId){
            return { url: `/users/contact-list/${userId}` }
        }
       }),
       addToContacts: builder.mutation({
        query({userId, contactId}){
            return { 
                method: `POST`,
                url: `/users/add-contact?userId=${userId}&contactId=${contactId}` 
            }
        }
       }),
    })
})

export const {
   useSearchUsersQuery,
   useGetContactListQuery,
   useAddToContactsMutation,
} = userApiSlice