import { combineReducers } from 'redux';
import serviceServiceReducer from './serviceInstanceReducer';
import serviceDefinitionReducer from './serviceDefinitionReducer';

const rootReducer = combineReducers({
    service: combineReducers({
        definitions: serviceDefinitionReducer,
        instances: serviceServiceReducer
    })
});

export default rootReducer;