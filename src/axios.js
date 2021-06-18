import axios from 'axios'

const instance = axios.create({
    baseURL:"./data.json"
})

export default instance