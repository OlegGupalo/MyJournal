import { GetServerSideProps, NextPageContext } from "next";
import { UserApi } from "./user";
import Cookies, { parseCookies } from 'nookies'
import axios from "axios";
import { PostApi } from "./post";

export type ApiReturnType = {
    user: ReturnType<typeof UserApi>
    post: ReturnType<typeof PostApi>
}

export const Api = (ctx: NextPageContext | GetServerSideProps): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    const token = cookies.rtoken

    const instance = axios.create({
        baseURL: 'http://localhost:4200/',
        headers: {
            Authorization: `Token ${token}`
        }
    })


    return {
        user: UserApi(instance),
        post: PostApi(instance)
    }
}