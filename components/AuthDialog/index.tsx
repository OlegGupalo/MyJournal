import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { ArrowBackIos, Instagram, MailOutlineOutlined } from "@mui/icons-material";
import Google from "@mui/icons-material/Google";
import { Button, Dialog, DialogContent, DialogContentText, styled, ButtonProps, TextField, Link } from "@mui/material";
import styles from './AuthDialog.module.scss'
import { purple, lightBlue } from '@mui/material/colors';
import { MainForm } from "./forms/Main";
import { LoginForm } from "./forms/Login";
import { RegisterForm } from "./forms/Register";

interface AuthDialogProps {
    onClose: () => void
    visible: boolean
}   

// export const CustomButton = styled(Button)<ButtonProps>((({theme}) => ({
//     color: `${lightBlue[50]} !important`,
//     fontWeight: '600 !important',
//     backgroundColor: `#bc2a8d !important`,
//     '&:hover': {
//         backgroundColor: `#cd486b !important`,
//     },
// })))

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose: handleClose, visible }) => {
    const [formType, setFormType] = useState<'main' | 'login' | 'register'>('login')
    return (
        <Dialog
        open={visible}
        onClose={handleClose}
        maxWidth={'xs'}
        fullWidth
        >
            <DialogContent>
                <DialogContentText component={'span'}>
                    <Typography component='span' className={styles.back} onClick={() => setFormType('main')}>
                        <ArrowBackIos />К авторизации
                    </Typography>
                    {formType === 'main' && <div className={styles.content}>
                        <MainForm onType={() => setFormType('login')} />
                    </div>}
                    {formType === 'login' && <div>
                        <LoginForm onType={() => setFormType('register')} />
                    </div>}
                    {formType === 'register' && <div>
                        <RegisterForm onType={() => setFormType('login')}/>
                    </div>}
                    </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}