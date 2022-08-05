import { Request, Response } from 'express';
import { ProductsService } from '../services';

class ProductController extends ProductsService {
  public static controllerGetAllProducts = async (req: Request, res: Response)
  : Promise<Response> => {
    const products = await super.getAllProducts();
    return res.status(200).json(products);
  };

  public static controllerNewProduct = async (req: Request, res: Response): Promise<Response> => {
    const product = await super.newProduct(req.body);
    return res.status(201).json(product);
  };

  public static controllerGetAllOrders = async (req: Request, res: Response): Promise<Response> => {
    console.log('entro a getAllOrders');
    const orders = await super.serviceGetAllOrders();
    return res.status(200).json(orders);
  };
}

export default ProductController;