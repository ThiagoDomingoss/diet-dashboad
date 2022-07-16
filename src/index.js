import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

import foodreducer from './reducers/FoodReducer';
import macroreducer from './reducers/DashboardReducer';
import mealreducer from './reducers/MealReducer';
const store = configureStore({
  reducer: {
    foods: foodreducer,
    macros: macroreducer,
    meal: mealreducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
