import axios from 'axios'
import { API_ACCESS_KEY, API_URL } from './const'

export const BASE_URL = API_URL

const baseAxios = axios.create({
	baseURL: BASE_URL,
	params: {
		language: 'ru-RU',
	},
})

baseAxios.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${API_ACCESS_KEY}`
	return config
})

export default baseAxios
