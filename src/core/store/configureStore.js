import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

let store;

export default function configureAppStore() {
	const sagaMiddleware = createSagaMiddleware();

	const store = configureStore({
		reducer: rootReducer,
		preloadedState: {},
		middleware: new MiddlewareArray().concat(sagaMiddleware),
		devTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
	});

	sagaMiddleware.run(rootSaga);
	store.close = () => store.dispatch(END);

	return store;
}

export { store };
