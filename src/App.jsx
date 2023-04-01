import React from 'react';
import { Route, Routes } from 'react-router';

import { PageLayout } from './layout/PageLayout';
import { Sidebar } from './components/Sidebar';
import { Info, Plan, Addons, Summary, Confirm } from './pages';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <Sidebar />
        <div className="page-wrapper">
          <Routes>
            <Route element={<PageLayout />}>
              <Route path="/" element={<Info />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/addons" element={<Addons />} />
              <Route path="/summary" element={<Summary />} />
            </Route>
            <Route path="/confirm" element={<Confirm />} />
            <Route
              path="*"
              element={
                <div className="not-found">
                  <h1>Not Found</h1>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
