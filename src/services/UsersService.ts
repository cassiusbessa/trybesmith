import { UsersModel } from '../models';
import { Iuser } from '../interfaces';
import TokenService from './TokenService';

class UsersService extends UsersModel {
  public static async serviceNewUser(user: Iuser): Promise<string> {
    const registredUser = await super.newUser(user);
    const { username, classe, level } = registredUser;
    const token = TokenService.createToken({ username, classe, level });
    return token;
  }
}

export default UsersService;