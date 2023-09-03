import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Features/User'
import { Provider } from 'react-redux';

const store = configureStore({
  reducer:{
    user:userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



