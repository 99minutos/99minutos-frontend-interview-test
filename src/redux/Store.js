import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import launchReducer from './reducers/launchReducer';

const reducers = combineReducers({
  launchReducer: launchReducer,
});

const Store = createStore(reducers, composeWithDevTools());

export default Store;
