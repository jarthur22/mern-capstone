import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { stackReducer } from './reducers/stackReducers';
import ServerOverview from './components/stack/backend/pages/Server.Overview.md';

const reducer = combineReducers({
    stackDetails: stackReducer
});

const initialState = {
    stackDetails: {
        section: 'backend',
        subSection: 'server',
        page: `${ServerOverview}`
    }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
    )    
);

export default store;