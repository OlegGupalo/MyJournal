import * as yup from 'yup'

export const RegisterSchema = yup.object({
    username: yup.string().min(6, 'Минимальная длина имени 6 символов').required(),
    email: yup.string().email('Неверная почта').required('Обязательная почта'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Обязательный пароль'),
}).required()