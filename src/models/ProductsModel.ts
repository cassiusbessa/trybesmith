import { FieldPacket, Pool, ResultSetHeader } from 'mysql2/promise';
import { Iorder, IoriginalOrder, Iproduct } from '../interfaces'; 
import connection from './connection';

class ProductsModel {
  public static productsConnection: Pool = connection;

  public static async getAllProducts(): Promise<Iproduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.productsConnection.query(query);
    return products as Iproduct[];
  }

  public static async newProduct(product: Iproduct): Promise<Iproduct> {
    const query = 'INSERT INTO Trybesmith.Products SET ?';
    const [newProduct]: [ResultSetHeader, FieldPacket[]] = await this.productsConnection
      .query(query, product);
    const forgedProduct = {
      id: newProduct.insertId,
      ...product,
    };  
    return forgedProduct as Iproduct;
  }

  public static async getAllOrders(): Promise<IoriginalOrder[] | Iorder[]> {
    const query = `SELECT Orders.id, userId, Products.id as productsIds 
    FROM Trybesmith.Orders as Orders
    INNER JOIN Trybesmith.Products as Products 
    ON Products.orderId = Orders.id
    ORDER BY userId`;
    const [orders] = await this.productsConnection.query(query);
    console.log(orders);
    return orders as IoriginalOrder[] | Iorder[];
  }
}

export default ProductsModel;