import { Typography } from "@material-ui/core"
import { Divider, Input, Paper, Tab, Tabs, TextareaAutosize, TextField } from "@mui/material"
import { useState } from "react"
import { Comment } from "../Comment"
import { WriteComment } from "../WriteComment"
import styled from './Comments.module.scss'
import {data} from './../data.js'

export const Comments = () => {
    const [tab, setTab] = useState(0)
    const comment = data[tab === 0 ? 'popular' : 'new']
    console.log(tab, 222)
    return (
        <Paper className='mt-40 p-30'>
            <Typography><b>42 комментария</b></Typography>
            <Tabs className='mt-20'
                 value={tab} 
                 onChange={(_,newValue) => setTab(newValue)}
                 value={tab} 
                 indicatorColor='primary' 
                 textColor='primary'>
                <Tab label='Популярные' />
                <Tab label='Новые'/>
            </Tabs>
            <div>
            <WriteComment />
            {comment.map((e,_) => 
                <Comment key={_} item={e} />    
            )}
            </div>
        </Paper>
    )
}