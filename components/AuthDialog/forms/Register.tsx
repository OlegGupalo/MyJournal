import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@material-ui/core";
import { ArrowBackIos, Google, Instagram, MailOutlineOutlined } from "@mui/icons-material";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomButton } from "..";
import agent from "../../../agent";
import { RegisterUserDto } from "../../../utils/dto/types";
import { RegisterSchema } from "../../../utils/schemas/registerValidation";
import styles from './../AuthDialog.module.scss'
import {setCookie} from 'nookies'


interface RegisterFormProps {
    onType: () => void
}

interface IFormInputs {
    name: string
    email: string
    password: number
  }

export const RegisterForm: React.FC<RegisterFormProps> = ({onType}) => {

    const [formError, setFormError] = useState(null)

    const {register, handleSubmit, formState: { errors, isValid, isSubmitting }} = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterSchema)
    })

    const onSubmit: any = async (dto: RegisterUserDto) => {
        try {
            const data = await agent.Auth.register(dto)
            console.log(data)
            setCookie(null, 'rtoken', data.user.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
        } catch (error: any) {
            setFormError(error.response.body.message)
        }
    }

    return (
        <>
            <div className={styles.choiceBlock}>
                <Typography className={styles.text}>Зарегестрироваться через почту</Typography>
                <Typography>или <span onClick={onType}>войти</span></Typography>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    {...register('username')}
                    className="mb-10" 
                    fullWidth 
                    placeholder="Имя и Фамилия"
                    error={!!errors.name?.message}
                    helperText={errors.name?.message}
                />
                <TextField 
                    {...register('email')}
                    className='mb-10' 
                    fullWidth 
                    placeholder= 'Почта'
                    error={!!errors.email?.message}
                    helperText={errors.email?.message} 
                />    
                <TextField 
                    {...register('password')}
                    className='mb-10' 
                    fullWidth 
                    type='password' 
                    placeholder= 'Пароль'
                    error={!!errors.password?.message}
                    helperText={errors.password?.message} 
                />
                {formError && <Alert sx={{
                    margin: '10px 0 10px 0'
                }} variant="outlined" severity="error">
                    {formError}
                </Alert>}
                <Button type='submit' disabled={!isValid || isSubmitting} variant='contained'>Зарегестрироваться</Button>
            </form>
                 
        </>
    )
}