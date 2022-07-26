import { apiSlice } from '../app/apiSlice'

export const roomApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createRoom: builder.mutation({
            query: ({nameContact,contactId,usersId,userName}) => {
                return {
                    method: `POST`,
                    url: `/room/create?nameContact=${nameContact}&contactId=${contactId}&usersId=${usersId}&userName=${userName}`
                }
            }
        }),
        getRoom: builder.query({
            query({nameRoom, userName}){
                return {
                    url: `/room?roomName=${nameRoom}&userName=${userName}`
                }
            }
        }),
        createMesage: builder.mutation({
            query({content, userId, roomId}){
                return {
                    url: '/mesages/create',
                    method: 'POST',
                    body: {
                        content: content, 
                        userId: userId, 
                        roomId: roomId
                    }
                }
            }
        }),
        updateMesage: builder.mutation({
            query({id,set}){
                return {
                    url: `/mesages/update/${id}`,
                    method: 'PUT',
                    body: {
                        set: set
                    }
                }
            }
        })
    })
})

export const {
    useCreateRoomMutation,
    useGetRoomQuery,
    useCreateMesageMutation,
    useUpdateMesageMutation,
} = roomApiSlice