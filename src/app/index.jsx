import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import createSagaMiddleware, { END } from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('application')
);