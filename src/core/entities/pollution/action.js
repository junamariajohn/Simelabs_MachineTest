import { ActionType } from "./actionType";

export const PollutionAction = {
	getCountry() {
		return {
			type: ActionType.GET_COUNTRY_BEGIN,
		};
	},
	getCity(country) {
		return {
			type: ActionType.GET_CITY_BEGIN,
			country,
		};
	},
	getMeasurement(values) {
		debugger;
		return {
			type: ActionType.GET_MEASUREMENT_BEGIN,
			values,
		};
	},
};
