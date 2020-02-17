// without Redux Toolkit
// import { createStore } from 'redux';
// import rootReducer from './rootReducer';

// /* eslint-disable no-underscore-dangle */
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// /* eslint-enable */

// with Redux Toolkit

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({ reducer: rootReducer });

export default store;
