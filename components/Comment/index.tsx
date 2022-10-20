import { Paper, Typography } from "@mui/material"
import React from "react"
import { UserActions } from "../UserAction"
import styled from './Comment.module.scss'

interface CommentProps {
    item: any
}

export const Comment: React.FC<CommentProps> = ({item}) => {
    const author = {
        username: 'Obivan Kenobi',

    }

    return (
        <div className='mt-30'>
            <Paper>
                <UserActions author={item.author} small />
                <Typography className='p-30'>
                    {item.text}
                </Typography>
            </Paper>
        </div>
    )
}