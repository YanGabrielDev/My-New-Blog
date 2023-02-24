"use client"
import { Posts } from "@/interfaces/postsInterface";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
interface PostContext{
    posts: Array<Posts>,
    update: (c: Array<Posts>) => void,
    selectedPost: Posts,
    showSelectPost: (c: Posts) => void,
}

interface PostProvider{
    children: ReactNode
}
const PostContext = createContext<PostContext>({
      posts: [],
      update: () => [],
      showSelectPost: () => [],
      selectedPost: {id: '', post: '', title: ''}


})

export const PostProvider =  ({children}: PostProvider) => {

    const [posts, setPosts] = useState<Array<Posts>>([])
    const [selectedPost, setSelectedPost] = useState<Posts>({
        id: '', post: '', title: ''
    })
    const update = (c: Array<Posts>) => {
        setPosts(c)
    }

    const showSelectPost = (c: Posts) => {
        setSelectedPost((c) => c)
    }
    return(
        <PostContext.Provider value={{posts, update, showSelectPost, selectedPost}}>{children}</PostContext.Provider>
    )
}
export const usePostsContext = () => useContext(PostContext)