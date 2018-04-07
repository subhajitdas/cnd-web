import initialState from "../store/initialState";
import {
    SERVICE_DEFINITION_GET_ALL_SUCCESS,
    SERVICE_DEFINITION_GET_ALL_ERROR
} from "../../constants/actionTypes";

export default function serviceDefinitionReducer(state = initialState.service.definitions, action) {
    switch (action.type) {
        case SERVICE_DEFINITION_GET_ALL_SUCCESS:
            return action.definitions;
        case SERVICE_DEFINITION_GET_ALL_ERROR:
            return [];
        default:
            return state;
    }
}