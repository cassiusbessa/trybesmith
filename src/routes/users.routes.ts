import { Router } from 'express';
import { UsersController } from '../controllers';

const userRoutes = Router();

// const newProductControllers = new ProductsController();
userRoutes.post('/', UsersController.controllerNewUser);

export default userRoutes;