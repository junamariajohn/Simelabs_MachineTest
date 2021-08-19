import { ApiStatus } from "../../base/constants";

export const initialPollutionState = {
	apiStatus: ApiStatus.LOADING,
	country: {
		meta: {},
		results: [],
		error: {},
	},
	city: {
		meta: {},
		results: [],
		error: {},
	},
	measurement: {
		meta: {},
		results: [],
		error: {},
	},
};
