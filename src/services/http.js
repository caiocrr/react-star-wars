import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = 'https://swapi.co/api/';

class Http {
	api = axios.create({
		baseURL: `${API_URL}`
	});

	constructor() {
		this.api.interceptors.request.use(
			async (config) => {
				config.headers['Content-Type'] = 'application/json';
				config.headers.Accept = 'application/json';
				return config;
			},
			(error) => {
				// I cand handle a request with errors here
				toast.error('Ocorreu um erro =(');
				return Promise.reject(error);
			}
		);
	}
	get = (route) => {
		return this.api.get(route, {
			mode: 'no-cors'
		});
	};
}

export const http = new Http();
