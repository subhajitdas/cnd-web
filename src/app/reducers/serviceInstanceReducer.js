import initialState from "../store/initialState";
import {
    SERVICE_INSTANCE_GET_ALL_SUCCESS,
    SERVICE_INSTANCE_GET_ALL_ERROR
} from "../../constants/actionTypes";

export default function serviceServiceReducer(state = initialState.service.instances, action) {
    switch (action.type) {
        case SERVICE_INSTANCE_GET_ALL_SUCCESS:
            return action.instances;
        case SERVICE_INSTANCE_GET_ALL_ERROR:
            return [];
        default:
            return state;
    }
}