import { put, call, takeLatest } from 'redux-saga/effects';
import { SERVICE_DEFINITION_GET_ALL } from '../../constants/actionTypes';
import {
    getServiceDefinitionsSuccess,
    getServiceDefinitionsError
} from '../actions/serviceDefinitionActions';
import API from '../../lib/api';

function* getServiceDefinitions({ filter }) {
    try {
        const { data } = yield call(API.get, '/serviceDefinitions');
        yield put(getServiceDefinitionsSuccess(data));
    } catch (error) {
        yield put(getServiceDefinitionsError(error));
    }
}

export default function* serviceDefinitionSagas() {
    yield takeLatest(SERVICE_DEFINITION_GET_ALL, getServiceDefinitions);
}