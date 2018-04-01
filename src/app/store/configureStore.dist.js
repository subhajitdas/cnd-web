import { applyMiddleware } from 'redux';
import configureStore from './configureStore';

export default function (sagaMiddleware, initialState) {
    return configureStore(
        initialState,
        applyMiddleware(sagaMiddleware)
    );
}