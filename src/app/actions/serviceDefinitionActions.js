import {
    SERVICE_DEFINITION_GET_ALL,
    SERVICE_DEFINITION_GET_ALL_SUCCESS,
    SERVICE_DEFINITION_GET_ALL_ERROR
} from "../../constants/actionTypes";

export function getServiceDefinitions(filter) {
    return { type: SERVICE_DEFINITION_GET_ALL, filter };
}

export function getServiceDefinitionsSuccess(definitions) {
    return { type: SERVICE_DEFINITION_GET_ALL_SUCCESS, definitions };
}

export function getServiceDefinitionsError(error) {
    return { type: SERVICE_DEFINITION_GET_ALL_ERROR, error };
}