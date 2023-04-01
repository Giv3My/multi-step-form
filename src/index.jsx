import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvider } from './context/AppContext';
import { FormProvider } from './context/FormContext';
import App from './App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </AppProvider>
  </Router>
);
