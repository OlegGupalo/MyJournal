import { AppBar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";
import { MenuOutlined, Message, Notifications } from "@material-ui/icons";
import { Avatar, Button, Paper } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from './Header.module.scss'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AuthDialog } from "../AuthDialog";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/slices/user";
import { useSelector } from "react-redux";

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#FAE9B8',
    borderRadius: '0px'
}

const avatar: CSSProperties = {
    borderRadius: '10px',
    height: '40px',
    width: '40px'
}

const Header:React.FC = () => {
    const userData = useAppSelector(selectUserData)
    if(userData) {
        console.log(userData)
    }
    const [authVisible, setAuthVisible] = useState(false)

    const handleClickOpen = () => {
        setAuthVisible(true);
    };

    const handleClose = () => {
        setAuthVisible(false);
    };

    useEffect(() => {
        if(authVisible && userData) {
            setAuthVisible(false)
        }
    }, [authVisible, userData])
    
    return <>
        <Paper style={style}>
            <div className={styles.headerItem}>
                <IconButton>
                    <MenuOutlined />
                </IconButton>
                <Button>
                    <Link href='/'>
                        NextHeder
                    </Link>
                </Button>
                <Button>
                    <Link href='/write'>
                        Создать пост
                    </Link>
                </Button>
                {/* <Button><Link href='/profile'>Profile</Link></Button> */}
            </div>
            <div className={styles.headerAvatar}>
                <IconButton onClick={handleClickOpen}>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Message />
                </IconButton>
                {userData
                    ? <Button>
                        <Link href='/profile'>
                            <a>
                                <Avatar
                                    style={avatar} 
                                    alt="Your username"
                                    src="/versel.svg"
                                />
                            </a>
                        </Link>
                    </Button>
                    : <IconButton onClick={handleClickOpen}>
                    <Notifications />
                </IconButton>
                }
                
            </div>
            <AuthDialog onClose={handleClose} visible={authVisible} />
        </Paper>
    </>
}

export default Header