import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Foo from './components/Foo';
import ErrorPage from './components/ErrorPage';

import reducers from './reducers';

// ========================================================
// Store Instantiation
// ========================================================

const history = createHistory();
const middleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(middleware, reduxThunk)(createStore);

const store = createStoreWithMiddleware(combineReducers({...reducers, router: routerReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/foo' component={Foo} />
        </App>
      </ConnectedRouter >
    </Provider>
    , MOUNT_NODE);
};
// <App>
//   <Switch>
//   </Switch>
// </App>
// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp();
      } catch (error) {
        console.error(error);
        renderError(error);
      }
    };

    // Setup hot module replacement
    module.hot.accept('./components/App', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    );
  }
}

// ========================================================
// Go!
// ========================================================
render();
