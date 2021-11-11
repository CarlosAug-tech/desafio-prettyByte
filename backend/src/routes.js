import { Router } from 'express';
import CustomerController from './app/controllers/CustomerController';

const routes = new Router();

routes.get('/api/customers', CustomerController.getCustomers);
routes.get('/api/customers/:id', CustomerController.getCustomerById);
routes.post('/api/customers', CustomerController.createCustomer);
routes.put('/api/customers/:id', CustomerController.updateCustomer);
routes.delete('/api/customers/:id', CustomerController.deleteCustomer);

export default routes;
