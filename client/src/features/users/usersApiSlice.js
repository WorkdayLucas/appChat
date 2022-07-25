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
       createNotification: builder.mutation({
        query({userIdOrigin, userId, notificationTypeId, userNameOrigin}){
            return { 
                method: `POST`,
                url: `/users/notification?userIdOrigin=${userIdOrigin}&userId=${userId}&notificationTypeId=${notificationTypeId}&userNameOrigin=${userNameOrigin}` 
            }
        }
       }),
       getNotifications: builder.query({
        query(userId){
            return{
                url:`/users/notification/${userId}`
            }
        }
       })
    })
})

export const {
   useSearchUsersQuery,
   useGetContactListQuery,
   useAddToContactsMutation,
   useCreateNotificationMutation,
   useGetNotificationsQuery,
} = userApiSlice