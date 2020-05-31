import React from 'react';
import AppNavigation from './AppNavigation';
import {Provider} from 'react-redux';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
export const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
};

export default App;
