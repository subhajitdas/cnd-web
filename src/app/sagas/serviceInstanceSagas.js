import { put, call, takeLatest } from 'redux-saga/effects';
import { SERVICE_INSTANCE_GET_ALL } from '../../constants/actionTypes';
import {
    getServiceInstancesSuccess,
    getServiceInstancesError
} from '../actions/serviceInstanceActions';

function* getServiceInstances({ filter }) {
    try {
        //const [articleGroups] = yield call(Api.get, Api.EndPoint.article.root);
        yield put(getServiceInstancesSuccess());
    } catch (error) {
        yield put(getServiceInstancesError());
    }
}

export default function* serviceInstanceSagas() {
    yield takeLatest(SERVICE_INSTANCE_GET_ALL, getServiceInstances);
}