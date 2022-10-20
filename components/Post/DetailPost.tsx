import React from "react";
import { Box, Paper, Typography } from "@material-ui/core"
import Link from "next/link"
import Image from "next/image"
import { PostActions } from "../PostActions"
import styles from './Post.module.scss'

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



export const DetailPost: React.FC<DetailPostProps> = ({
    id,
    body,
    createdAt,
    description,
    favorited,
    favoritesCount,
    slug,
    tagList,
    title,
    updatedAt,
    author
}) => {
    return <>
        <div>
            <Box className='p-20 mt-10'>
                <Typography variant='h5' classes={{root: styles.title}}>
                    <Link href={`/news/${slug}`}>
                        {title}
                    </Link>
                </Typography>
                <Typography className='mt-10 mb-15'>
                    {body}
                </Typography>
                <Image 
                    src='/vercel.svg'
                    height={500}
                    width={600}
                />
            </Box>
            <PostActions />
        </div>
    </>
}