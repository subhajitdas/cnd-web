import { applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import configureStore from './configureStore';

const reduxDevComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function (sagaMiddleware, initialState) {
    return configureStore(
        initialState,
        reduxDevComposeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                reduxImmutableStateInvariant(),
                createLogger()
            )
        ));
}