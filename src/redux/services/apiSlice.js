import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const CLIENT_ID="LR7lQ_E12lMX3MBF_cFh4NQHKNhAidTocJQ-40c3bMo"

export const imageApi=createApi({
    reducerPath:"imageApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.unsplash.com/"
    }),

    endpoints:(builder)=>({
        getPhotoList:builder.query({
            query:()=>({
                url:'photos/?per_page=15',
                headers:{
                Authorization: `Client-ID ${CLIENT_ID}`
                }
            }),
        }),
        getSinglePhoto:builder.query({
            query:(id)=>({
                url:`photos/${id}`,
                headers:{
                Authorization: `Client-ID ${CLIENT_ID}`
                }
            }),
            
        }),
        getPhotoCollectionBySearch:builder.query({
            query:(item)=>({
                url:`search/collections/?per_page=20&query=${item}`,
                headers:{
                Authorization: `Client-ID ${CLIENT_ID}`
                }
            }),
            
        }),
    })
})

export const {useGetPhotoListQuery,useGetSinglePhotoQuery,useGetPhotoCollectionBySearchQuery}=imageApi