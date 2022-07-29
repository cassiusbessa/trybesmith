import { ProductsModel } from '../models';
import { Iproduct } from '../interfaces';

class ProductsService extends ProductsModel {
  public static async getAllProducts(): Promise<Iproduct[]> {
    return super.getAllProducts();
  }

  public static async newProduct(product: Iproduct): Promise<Iproduct> {
    return super.newProduct(product);
  }
}

export default ProductsService;