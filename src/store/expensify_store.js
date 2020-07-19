import {createStore , combineReducers , applyMiddleware , compose} from 'redux';
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const expensify_store = createStore(combineReducers(
        {
            expenses: expenseReducer,
            filters: filterReducer,
            auth: authReducer
        }
    ) , composeEnhancers(applyMiddleware(thunk)));
    return expensify_store;
}
