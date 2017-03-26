import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
    form: formReducer
};

const reducer = combineReducers(reducers);
export const store = createStore(reducer);