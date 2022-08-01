import { FieldPacket, Pool, ResultSetHeader } from 'mysql2/promise';
import { Iproduct } from '../interfaces'; 
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
}

export default ProductsModel;