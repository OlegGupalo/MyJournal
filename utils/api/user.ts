import axios, { AxiosInstance } from "axios";

export const UserApi = (instance: AxiosInstance) => ({
    async getMe() {
        const {data} = await instance.get('/api/user/')
        return data
    }
})