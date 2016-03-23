import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistory, routeReducer } from 'redux-simple-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes.js'
import reducers from './reducers'
import startChat, {chatMiddleware} from './chat'

const reducer = combineReducers(Object.assign({}, reducers, {
    routing: routeReducer
}));

const reduxRouterMiddleware = syncHistory(browserHistory);

const createStoreWithMiddleware = applyMiddleware(chatMiddleware, reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

reduxRouterMiddleware.listenForReplays(store);

startChat(store);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);
