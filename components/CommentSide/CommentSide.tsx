import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import styles from './Comment.module.scss'
import {data} from './../data.js'
import { Avatar } from "@mui/material";
import {UserActions} from './../UserAction'
import {KeyboardArrowDown} from '@material-ui/icons'
import clsx from "clsx";

interface CommentItemProps {
    author: {
        username: string
    }
    text: string
    
}

const CommentItem: React.FC<CommentItemProps> = ({author, text}) => {
    return (
        <div>
            <UserActions author={author} small bg />
            <div className={styles.root}>
                <Typography>{text}</Typography>
            </div>
        </div>  
    )
}

export const CommentSide: React.FC = () => {
    const [visible, setVisible] = useState(true)

const toggleVisible = () => {
    setVisible(!visible)
}

    return (
        <div className={clsx(styles.comment, !visible && styles.rotated)}>
            <Typography variant='h6' onClick={toggleVisible} className={styles.userInfo}>
                <b>Комментарии</b> <KeyboardArrowDown />
            </Typography>
            {visible && data.popular.map((e,key) => 
                <CommentItem key={key} {...e} />    
            )}
        </div>
    )
}