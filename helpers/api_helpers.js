import axios from "axios";

const API_URL = process.env.BACKEND_URL + 'api';


const axiosApi = axios.create({
    baseURL: API_URL,
    validateStatus: function (status) {
        return status >= 200 && status < 600;
    },
})


axios.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
)


// for data fetching
export async function get(url, data, config = {}) {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('taxstickToken') ?? ''}`;
    return await axiosApi.get(url, { ...config, params: data }).then(response => response.data)
}


// for data posting
export async function post(url, data, config = {}) {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('taxstickToken') ?? ''}`;
    return await axiosApi.post(url, data, { ...config }).then(response => response.data)
}


// for data updating
export async function put(url, data, queryValue, config = {}) {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('taxstickToken') ?? ''}`;
    return await axiosApi.put(url, { ...data }, { ...config, params: queryValue }).then(response => response.data)
}


// for data deleting
export async function del(url, data, config = {}) {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('taxstickToken') ?? ''}`;
    return await axiosApi.delete(url, { ...config, params: data }).then(response => response.data)
}