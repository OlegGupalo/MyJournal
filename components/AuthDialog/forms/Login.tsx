import { Typography } from "@material-ui/core";
import { ArrowBackIos, Google, Instagram, MailOutlineOutlined } from "@mui/icons-material";
import { Alert, Button, TextField } from "@mui/material";
import React, { ErrorInfo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomButton } from "..";
import styles from './../AuthDialog.module.scss'
import { LoginSchema } from "../../../utils/schemas/loginValidation";
import { LoginUserDto } from "../../../utils/dto/types";
import agent from "../../../agent";
import { setCookie } from "nookies";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectUserData, setUserData } from "../../../redux/slices/user";


interface LoginFormProps {
    onType: () => void
}

interface IFormInputs {
    email: string
    password: number
  }

export const LoginForm: React.FC<LoginFormProps> = ({onType}) => {
    const dispatch = useAppDispatch()
    const [formError, setFormError] = useState(null)

    const {register, handleSubmit, formState: { errors, isValid }} = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginSchema)
    })

    const onSubmit: any = async (dto: LoginUserDto) => {
        try {
            const data = await agent.Auth.login(dto)
            console.log(data)
            setCookie(null, 'rtoken', data.user.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
            dispatch(setUserData(data))
        } catch (error: any) {
            setFormError(error.response.body.message)
        }
    }
    
    return (
        <>
            <div className={styles.choiceBlock}>
                <Typography className={styles.text}>Войти через почту</Typography>
                <Typography component={'span'}>или <span onClick={onType}>зарегестрироваться</span></Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <TextField 
                {...register('email')} 
                className='mb-10'
                error={!!errors.password?.message} 
                helperText={errors.email?.message}
                fullWidth 
                placeholder= 'Почта' 
            />    
            <TextField 
                {...register('password')} 
                className='mb-10' 
                fullWidth 
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                type='password' 
                placeholder= 'Пароль'
            />
            {formError && <Alert sx={{
                margin: '10px 0 10px 0'
            }} variant="outlined" severity="error">
                {formError}
            </Alert>}
            <Button type='submit' disabled={!isValid} variant='contained'>Войти</Button>    
            </form>
        </>
        
    )
}