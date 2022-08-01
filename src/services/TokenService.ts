import jwt from 'jsonwebtoken';
import { Iuser } from '../interfaces';

require('dotenv/config');

class TokenService {
  public static createToken(user: Iuser):string {
    const token = jwt.sign(
      { data: user }, 
      process.env.MYSQL_PASSWORD as string,
      { expiresIn: '15d', algorithm: 'HS256' },
    );
    return token as string;
  }

  public static verifyToken(token: string): Iuser {
    if (!token) {
      throw new Error('No token provided');
    }
    try {
      const data = jwt.verify(token, process.env.MYSQL_PASSWORD as string);
      console.log(data);
      return data as Iuser;
    } catch (_err) {
      throw new Error('Invalid token');
    }
  }
}

export default TokenService;
