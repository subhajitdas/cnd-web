import { createStore } from 'redux';

export default function (initialState, enhancers) {
    const store = createStore(() => { },
        initialState,
        enhancers
    );
    store.close = () => store.dispatch(END);
    return store;
}