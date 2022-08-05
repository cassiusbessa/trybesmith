// import { RowDataPacket } from 'mysql2/promise';
import { ProductsModel } from '../models';
import { Iproduct, Iorder, IoriginalOrder } from '../interfaces';

function transformKeyInArray(object: IoriginalOrder): Iorder {
  console.log('transformei');
  const newObject: any = { ...object };
  newObject.productsIds = [newObject.productsIds];
  return newObject as Iorder;
}

class ProductsService extends ProductsModel {
  public static async getAllProducts(): Promise<Iproduct[]> {
    return super.getAllProducts();
  }

  public static async newProduct(product: Iproduct): Promise<Iproduct> {
    return super.newProduct(product);
  }

  public static async serviceGetAllOrders(): Promise<Iorder[]> {
    const order = await super.getAllOrders() as IoriginalOrder[];

    const teste = order.reduce((acc: Iorder[], cur: IoriginalOrder, index: number): Iorder[] => {
      const newCur = transformKeyInArray(cur);
      if (index === 0) { acc.push(newCur); return acc; } 
      if (cur.id !== acc[acc.length - 1].id) { acc.push(newCur); return acc; }
      if (cur.id === acc[acc.length - 1].id) acc[acc.length - 1].productsIds.push(cur.productsIds);
      return acc;
    }, []);
    console.log(teste);
    return teste;
  }
}

export default ProductsService;
