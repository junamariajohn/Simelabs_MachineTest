import { createReducer } from "@reduxjs/toolkit";
import { ActionType } from "./actionType";
import { initialPollutionState } from "./state";

const reducer = createReducer(initialPollutionState, {
	[ActionType.GET_COUNTRY_BEGIN]: (state) => {
		state.country.meta = {};
		state.country.results = [];
		state.country.error = {};
	},
	[ActionType.GET_COUNTRY_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		state.country.meta = data.data.meta;
		state.country.results = data.data.results;
		state.country.error = {};
	},
	[ActionType.GET_COUNTRY_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.country.meta = {};
		state.country.results = [];
		state.country.error = { message: "Error fetching country list" };
	},

	[ActionType.GET_CITY_BEGIN]: (state) => {
		state.city.meta = {};
		state.city.results = [];
		state.city.error = {};
	},
	[ActionType.GET_CITY_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		state.city.meta = data.data.meta;
		state.city.results = data.data.results;
		state.city.error = {};
	},
	[ActionType.GET_CITY_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.city.meta = {};
		state.city.results = [];
		state.city.error = { message: "Error fetching city list" };
	},

	[ActionType.GET_MEASUREMENT_BEGIN]: (state) => {
		state.measurement.meta = {};
		state.measurement.results = [];
		state.measurement.error = {};
	},
	[ActionType.GET_MEASUREMENT_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		state.measurement.meta = data.data.meta;
		state.measurement.results = data.data.results;
		state.measurement.error = {};
	},
	[ActionType.GET_MEASUREMENT_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.measurement.meta = {};
		state.measurement.results = [];
		state.measurement.error = { message: "Error fetching measurement list" };
	},
});

export default reducer;
