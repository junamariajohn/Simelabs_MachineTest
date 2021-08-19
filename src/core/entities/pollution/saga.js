import { put, takeLatest } from "redux-saga/effects";
import { ActionType } from "./actionType";
import { Service } from "./service";

const countrySaga = function* (action) {
	const countryResponse = yield Service.fetchCountry();

	if (!countryResponse.error) {
		yield put({
			type: ActionType.GET_COUNTRY_SUCCESS,
			data: countryResponse.value,
		});
	} else {
		yield put({
			type: ActionType.GET_COUNTRY_FAILED,
			data: countryResponse.value,
		});
	}
};

const countryWatch = function* () {
	yield takeLatest(ActionType.GET_COUNTRY_BEGIN, countrySaga);
};

const citySaga = function* (action) {
	const cityResponse = yield Service.fetchCity(action.country);

	if (!cityResponse.error) {
		yield put({
			type: ActionType.GET_CITY_SUCCESS,
			data: cityResponse.value,
		});
	} else {
		yield put({
			type: ActionType.GET_CITY_FAILED,
			data: cityResponse.value,
		});
	}
};

const cityWatch = function* () {
	yield takeLatest(ActionType.GET_CITY_BEGIN, citySaga);
};

const measurementSaga = function* (action) {
	const measurementResponse = yield Service.fetchMeasurement(action.values);
	if (!measurementResponse.error) {
		yield put({
			type: ActionType.GET_MEASUREMENT_SUCCESS,
			data: measurementResponse.value,
		});
	} else {
		yield put({
			type: ActionType.GET_MEASUREMENT_FAILED,
			data: measurementResponse.value,
		});
	}
};

const measurementWatch = function* () {
	yield takeLatest(ActionType.GET_MEASUREMENT_BEGIN, measurementSaga);
};

export { countryWatch, cityWatch, measurementWatch };
