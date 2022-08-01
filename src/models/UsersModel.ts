import { FieldPacket, Pool, ResultSetHeader } from 'mysql2/promise';
import { Iuser } from '../interfaces'; 
import connection from './connection';

class UsersModels {
  public static productsConnection: Pool = connection;

  public static async newUser(user: Iuser): Promise<Iuser> {
    const query = 'INSERT INTO Trybesmith.Users SET ?';
    const [newUser]: [ResultSetHeader, FieldPacket[]] = await this.productsConnection
      .query(query, user);
    console.log(newUser);
    const registredUser = {
      id: newUser.insertId,
      ...user,
    };  
    return registredUser as Iuser;
  }
}

export default UsersModels;