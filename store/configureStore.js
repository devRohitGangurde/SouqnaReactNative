import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import countReducer from '../src/reducers/countReducer';

const rootReducer = combineReducers({
    count: countReducer,
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;