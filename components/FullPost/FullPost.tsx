import { Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { Comments } from '../Comments'
import { PostActions } from '../PostActions'
import { UserActions } from '../UserAction'
import styled from './FullPost.module.scss'
// // import 'moment/locale/ru'
// moment.locale('ru')

const FullPost: React.FC = ({post}: any) => {
    const {article} = post
    // const date = moment(article.createdAt).format("LL")
    console.log(article)
    return (
        <>
            <Paper elevation={0} className={styled.paper}>
                <Box>
                    <UserActions author={article.author} />
                </Box>
                <Typography 
                    variant='h3' 
                    className={styled.title} 
                    style={{fontWeight: 700}}>
                        {article.title}
                </Typography>
                    <Typography className={styled.description}>
                        {article.description}
                        {/* <Typography style={{
                            fontSize: '12px',
                            color: 'black',
                            fontWeight: 500,
                            paddingTop: '3px'
                        }}></Typography> */}
                    </Typography>
                
                <Box className={styled.content}>
                    <Typography>{article.body}</Typography>
                </Box>
                <PostActions className={styled.actions} />
                <Comments /> 
            </Paper>
        </>
    )
}

export default FullPost