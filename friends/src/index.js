import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import FriendReducer from './reducers/friendReducer';

const middleware = applyMiddleware(thunk)
const store = createStore(FriendReducer, middleware)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));


