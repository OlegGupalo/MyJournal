import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise)

const API_ROOT = 'http://localhost:4200'

const encode = encodeURIComponent
const responseBody = res => res.body

if (typeof window !== 'undefined') {
    // Perform localStorage action
    let token = localStorage.getItem('jwt')
}

const tokenPlugin = req => {
    if (token) {
        req.set('Authorization', `Token ${token}`)
    }
}

const requests = {
    del: url => superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody),
    post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
    put: (url, body) => superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
}

const Auth = {
    current: (tokens) => requests.get('/api/user').set({'Authorization': `Token ${tokens}`}),
    login: (dto) => requests.post('/api/users/login', { user: dto }),
    register: (dto) => requests.post('/api/users', { user: dto }),
    save: user => requests.put('/api/user', { user })
}

const Tag = {
    all: () => requests.get('/tags')
}

const omitSlug = article => Object.assign({}, article, { slug: undefined })

const Article = {
    all: () => requests.get('/api/articles'),
    byAuthor: (author) => requests.get(`/api/articles?author=${encode(author)}`),
    get: (slug) => requests.get(`/api/articles/${slug}`),
    create: (article) => requests.post('/api/articles', { article }),
    like: (slug) => requests.post(`/api/articles/${slug}/favorite`),
    dislike: (slug) => requests.del(`/api/articles/${slug}/favorite`)
}

export default {
    Auth,
    Tag,
    Article,
    setToken: _token => { token = _token }
}