import { Router } from 'express';
import { ProductsController } from '../controllers';

const productRoutes = Router();

// const newProductControllers = new ProductsController();
productRoutes.get('/', ProductsController.controllerGetAllProducts);
productRoutes.post('/', ProductsController.controllerNewProduct);

export default productRoutes;