import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import App from './App'
import logger from 'redux-logger'
import rootSaga from './sagas/rootSaga';
import createSagaMiddleware from 'redux-saga'
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);