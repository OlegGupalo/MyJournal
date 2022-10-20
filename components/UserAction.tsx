import { Typography } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { Avatar, Box } from "@mui/material"
import Link from "next/link"
import React from "react"

interface UserActionProps {
    author: any;
    small?: boolean
    bg?:boolean
}

const styles: CSSProperties = {
    box: {
        display: 'flex',
        justifyContent: 'start',
        padding: '10px 0 10px 19px',
        
        alignItems: 'center',
        backgroundColor: '#e9ebee'
    },
    othrBox: {
        display: 'flex',
        justifyContent: 'start',
        padding: '10px 0 10px 19px',
        
        alignItems: 'center',
    },
    container: {
        paddingLeft: 10
    },
    text: {
        fontSize: '18px',
        fontWeight: 600,
        margin: 0,
        padding: 0
    },
    textSmall: {
        fontSize: '14px',
        fontWeight: 600
    },
    followers: {
        fontSize: '13px',
        margin: 0,
        padding: 0
    },
    avatar: {
        width: '56px',
        height: '56px'
    },
    smallAvatar: {
        width: '35px',
        height: '35px'
    }
    
}


export const UserActions: React.FC<UserActionProps> = ({author, small, bg}) => {
    return <>
        <div style={!bg ? styles.box : styles.othrBox}>
            <Avatar 
                style={small ? styles.smallAvatar : styles.avatar}
            />
            <div style={styles.container}>
                <Typography style={small ? styles.textSmall : styles.text}>
                    <Link href='/profile'>
                        {author.username}
                    </Link>
                    
                </Typography>
                <Typography style={styles.followers}>
                    
                    1.8k followers
                </Typography>
            </div>
        </div>
    </>
}