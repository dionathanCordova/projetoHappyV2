import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from "typeorm";
import UserModel from "../models/User";
import UserView from '../views/user_view';

interface IAuthDTO {
   email: string;
   password: string;
}

export default class CreateAuthService {
   public async execute({email, password}: IAuthDTO): Promise<any> {
      const userRepository = getRepository(UserModel)

      const user = await userRepository.findOne({
         where: {email}
      });

      if(!user) {
         throw new Error('Credentials dont match');
      }

      const comparePass = await compare(password, user?.password);

      if(!comparePass) {
         throw new Error('Credentials not match');
      }

      const accessToken = process.env.ACCESS_TOKEN_SECRET;
      const token = sign({}, `${accessToken}`, {
         subject: user.email,
         expiresIn: '1d'
      })

      return {'user' : UserView.render(user), 'token' : token};
   }
}