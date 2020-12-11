import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
const composeEnhancers = compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;