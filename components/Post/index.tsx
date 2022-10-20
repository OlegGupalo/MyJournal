import { Box, Paper, Typography } from "@material-ui/core"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { PostActions } from "../PostActions"
import { DetailPost } from "./DetailPost"
import styles from './Post.module.scss'

interface PostProps {
    post: any
}

type AuthorType = {
    bio: string
    email: string
    id: number
    image: string
    username: string
}

interface DetailPostProps {
    id: number
    body: string
    createdAt: string
    description: string
    favorited: boolean
    favoritesCount: number
    slug: string
    tagList: string[]
    title: string
    updatedAt: string
    author: AuthorType
}

export const Post: React.FC<PostProps> = ({post}) => {
    return (
        <Paper elevation={3} classes={{root: styles.box}}>
            {post.articles.map((detail: DetailPostProps, key: number) => 
                <DetailPost key={key} {...detail} />
            )}
        </Paper>
    )
}