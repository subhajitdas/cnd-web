import {
    SERVICE_INSTANCE_GET_ALL,
    SERVICE_INSTANCE_GET_ALL_SUCCESS,
    SERVICE_INSTANCE_GET_ALL_ERROR
} from "../../constants/actionTypes";

export function getServiceInstances(filter) {
    return { type: SERVICE_INSTANCE_GET_ALL, filter };
}

export function getServiceInstancesSuccess(instances) {
    return { type: SERVICE_INSTANCE_GET_ALL_SUCCESS, instances };
}

export function getServiceInstancesError(error) {
    return { type: SERVICE_INSTANCE_GET_ALL_ERROR, error };
}