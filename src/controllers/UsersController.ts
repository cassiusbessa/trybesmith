import { Request, Response } from 'express';
import { UsersService } from '../services';

class UserController extends UsersService {
  public static controllerNewUser = async (req: Request, res: Response): Promise<Response> => {
    const registredUser = await super.serviceNewUser(req.body);
    return res.status(201).json({ token: registredUser });
  };
}

export default UserController;