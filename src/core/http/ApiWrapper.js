import Axios from 'axios';

import Config from '../ApiConfig/config.json';
import { ApiMethods, HTTP_HEADER } from '../base/constants';

const BASE_URL = Config.BASE_URL;

export class ApiWrapper {
	static async sendRequest(options) {
		if (options.method === undefined) {
			options.method = ApiMethods.GET;
		}

		let axiosResult = null,
			result = null;

		let contextHeader = {};

		if (options.header) {
			contextHeader = options.header;
		}

		let axiosOptions = {
			headers: {
				[HTTP_HEADER.ContentType]: 'application/json',
				...contextHeader,
			},
		};

		try {
			const url = `${BASE_URL}/v2/${options.url}`;

			switch (options.method) {
				case ApiMethods.GET:
					axiosResult = await Axios.get(url, options.data, axiosOptions);
					break;
				default:
					break;
			}

			result = {
				value: axiosResult.data,
				statusCode: axiosResult.status,
				error: '',
			};
		} catch (error) {
			result = {
				value: error.response?.data,
				statusCode: error.response?.status,
				error: error.message,
			};
		}

		return result;
	}
}
