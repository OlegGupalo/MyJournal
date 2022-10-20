export type LoginUserDto = {
    email: string
    password: string
}

export type RegisterUserDto = {
    username: string
} & LoginUserDto

export type UserResponse = {
    bio: string
    email: string
    id: number
    image: string
    username: string
}

export type PostResponse = {
    
}