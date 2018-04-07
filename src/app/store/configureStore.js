import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function (initialState, enhancers) {
    const store = createStore(
        rootReducer,
        initialState,
        enhancers
    );
    store.close = () => store.dispatch(END);
    return store;
}