import { OutputData } from "@editorjs/editorjs";
import { AxiosInstance } from "axios";

type createType = {
    title: string
    body: OutputData[]
}

export const PostApi = (instance: AxiosInstance) => ({
    async getPosts() {
        const {data} = await instance.get('/api/articles')
        return data
    },
    async create(article: createType) {
        const data = await instance.post('/api/articles', {article})
        return data
    }
})