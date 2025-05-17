import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '../../../utils/baseUtils';





const authApi = createApi(
    {
        reducerPath: "authApi",
        baseQuery: fetchBaseQuery({
            baseUrl: `${getBaseUrl()}/api/auth`,
            credentials: "include",
        }),
        tagTypes:["User"],
        endpoints: (builder) => ({
            registerUser: builder.mutation({
                query: (newUser) => ({
                    url: "/register",
                    method: "POST",
                    body: newUser
                })
            }),
            loginUser: builder.mutation({
                query: (credentials) => ({
                    url: "/login",
                    method: "POST",
                    body: credentials
                })
            }),
            logoutUser: builder.mutation({
                query: () => ({
                    url: '/logout',
                    method: 'POST',
                    credentials: 'include',  
                }),
            }),
            getUser: builder.query({
                query: () => ({
                    url: "/users",
                    method: "GET"
                }),
                refetchOnMount: true,
                invalidatesTags: ["User"],

            }),
            deleteUser: builder.mutation({
                query: (userId) => ({
                    url: `/users/${userId}`,
                    method: "DELETE",

                }),
                invalidatesTags: ["User"],
            }),
            updateUserRole: builder.mutation({
                query: ({ userID, role }) => ({
                    url: `/users/${userID}`,
                    method: "PUT",
                    body: { role }
                }),
                refetchOnMount: true,
                invalidatesTags: ["User"]
            }

            ),
            editProfile: builder.mutation({
                query: (profileData) => ({
                    url: `/edit-profile`,
                    method: "PATCH",
                    body: profileData
                  }),
            })

        })
    }
)

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useDeleteUserMutation, useEditProfileMutation, useLazyGetUserQuery, useUpdateUserRoleMutation } = authApi;
export default authApi;