import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import CreateUserService from '../services/CreateUserService';
import User from '../models/User';
import UserView from '../views/user_view';

export default class UserController {
   public async index(request: Request, response: Response): Promise<Response> {
      const userRepository = getRepository(User);

      const users = await userRepository.find();

      if(users) {
         return response.json(UserView.renderMany(users));   
      }

      return response.json(users);
   }

   public async create(request: Request, response: Response): Promise<Response> {
      const { name, email, password, confirm_password } = request.body;

      try {
         const createUserService = new CreateUserService();
         const createUser = await createUserService.execute({name, email, password, confirm_password});
         
         return response.status(200).json(createUser);
         
      } catch (error) {
         return response.status(404).json({message: error.message});
      }
   }

   public async findUserById(request: Request, response: Response): Promise<Response> {
      const { id } = request.params

      const userRepository = getRepository(User);

      const user = await userRepository.findOne(id);

      if(user) {
         const renderUser = UserView.render(user);
         return response.json(renderUser);
      }

      return response.status(404).json({message: 'user does not exists'})
   }
}