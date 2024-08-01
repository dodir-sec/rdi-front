import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

import Login from '../pages/login/Login'
import NotFound from '../pages/notfound/NotFound';
import Dashboard from '../pages/dashboard/Dashboard';
import About from '../pages/about/About';
import Targets from '../pages/targets/Targets';
import Target from '../pages/targets/Target';
import Scan from '../pages/scan/Scan';
import DashboardLayout from '../pages/dashboard/DashboardLayout';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/targets" element={<Targets />} />
          <Route path="/targets/:domain" element={<Target />} />
          <Route path="/scan" element={<Scan />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
  export default AppRoutes;
