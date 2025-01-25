import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import * as serviceWorker from './serviceWorker'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CssBaseline from '@mui/material/CssBaseline';
// third party
import reducer from './views/pages/Dashboard/store/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import '../public/assets/scss/style.scss';
const container = document.getElementById('root');
const store = configureStore({ reducer });


ReactDOM.render(
      <BrowserRouter>
      <CssBaseline />




      
      <Provider store={store}>
    <App />
  </Provider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </BrowserRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
