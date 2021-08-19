import { ApiWrapper } from "../../http/ApiWrapper";
import Config from "../../ApiConfig/config.json";
import { ApiMethods } from "../../base/constants";

export class Service extends ApiWrapper {
	static async fetchCountry() {
		return this.sendRequest({
			url: `${Config.CONTROLLER_COUNTRY}`,
			method: ApiMethods.GET,
		});
	}
	static async fetchCity(country) {
		return this.sendRequest({
			url: `${Config.CONTROLLER_CITY}?country=${country}`,
			method: ApiMethods.GET,
		});
	}
	static async fetchMeasurement(values) {
		return this.sendRequest({
			url: `${Config.CONTROLLER_MEASUREMENT}?country=${values.country}&city=${values.city}&date_from=${values.date_from}&date_to=${values.date_to}`,
			method: ApiMethods.GET,
		});
	}
}
