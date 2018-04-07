import { all, fork } from 'redux-saga/effects';
import serviceInstanceSagas from './serviceInstanceSagas';
import serviceDefinitionSagas from './serviceDefinitionSagas';

export default function* rootSaga() {
    yield all([
        fork(serviceDefinitionSagas),
        fork(serviceInstanceSagas)
    ]);
}