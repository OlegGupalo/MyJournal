import { Typography } from "@material-ui/core";
import { Google, Instagram, MailOutlineOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { CustomButton } from "..";

interface MainFormProps {
    onType: () => void
}

export const MainForm: React.FC<MainFormProps> = ({onType}) => {
    return (
        <>
            <Typography>Вход в MyJournal</Typography>
                <CustomButton className='mb-10 mt-10' variant='contained' fullWidth>
                    <Instagram className='mr-5' />
                        Instagram
                </CustomButton>
                <Button className='mb-10' variant='contained' fullWidth><Google className='mr-5' />Вход в Google</Button>
                <Button className='mb-10' variant='outlined' onClick={onType} fullWidth><MailOutlineOutlined className='mr-5' />Через почту</Button>
        </>
    )
}