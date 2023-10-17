import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.js';
import { Provider } from 'react-redux';

// store.dispatch(createBug("bug1"));
// store.dispatch(createBug("bug2"));
// store.dispatch(resolveBug(1))

// console.log(store.getState());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
