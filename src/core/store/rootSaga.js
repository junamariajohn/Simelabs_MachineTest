import { all } from 'redux-saga/effects';
import {
	cityWatch,
	countryWatch,
	measurementWatch,
} from '../entities/pollution/saga';

export default function* rootSaga() {
	yield all([countryWatch(), cityWatch(), measurementWatch()]);
}
