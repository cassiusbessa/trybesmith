import { Router } from 'express';
import { ProductsController } from '../controllers';

const productRoutes = Router();
const ordersRoutes = Router();

// const newProductControllers = new ProductsController();
productRoutes.get('/', ProductsController.controllerGetAllProducts);
productRoutes.post('/', ProductsController.controllerNewProduct);
ordersRoutes.get('/', ProductsController.controllerGetAllOrders);

export {
  productRoutes,
  ordersRoutes,
};