import { Router } from 'express';
import { productRoutes, ordersRoutes } from './products.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/products', productRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/users', usersRoutes);

export default routes;