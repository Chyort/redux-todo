import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducer from './list_reducers';

const rootReducer = combineReducers({
    list: listReducer,
    form: formReducer
});

export default rootReducer;
