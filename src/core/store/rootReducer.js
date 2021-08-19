import { combineReducers } from 'redux';
import pollutionReducer from '../entities/pollution/reducer';

const rootReducer = combineReducers({
	pollution: pollutionReducer,
});

export default rootReducer;
