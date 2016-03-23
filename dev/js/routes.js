import React from 'react'
import { Redirect, Route, browserHistory } from 'react-router'

// Pages
import App from './containers/App'
import Chat from './containers/Chat'
import Photos from './containers/Photos'
import Settings from './containers/Settings'

// Store
import reducers from './reducers'

import startChat, {chatMiddleware} from './chat'

export default (<Route>
    <Redirect from="/" to="chat" />
    <Route path="/" component={App}>
        <Route path="/chat" component={Chat}/>
        <Route path="/photos" component={Photos}/>
        <Route path="/settings" component={Settings}/>
    </Route>
</Route>);
