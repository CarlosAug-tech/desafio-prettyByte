import React from 'react';
import { Routes as SwitchRoutes, Route } from 'react-router-dom';
import AddCustomer from '../pages/Customer/__addCustomer';
import EditCustomer from '../pages/Customer/__edit';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <SwitchRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/addCustomer" element={<AddCustomer />} />
    <Route path="/editCustomer/:id" element={<EditCustomer />} />
  </SwitchRoutes>
);

export default Routes;
