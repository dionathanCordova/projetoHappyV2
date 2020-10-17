import { Router } from 'express'; 
import multer from 'multer';

import uploadConfig from './config/upload';

import orphanagesController from './controllers/OrphanagesController';

import UserController from './controllers/UserController';
const userController = new UserController();

import AuthController from './controllers/AuthController';
const authController = new AuthController();

import ForgotPasswordController from './controllers/ForgotPasswordController';
const forgotpassController = new ForgotPasswordController();

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/user', userController.create);
routes.get('/user', userController.index);
routes.get('/user/:id', userController.findUserById);

routes.post('/auth', authController.create);

routes.post('/forgotpass', forgotpassController.create);

routes.get('/orphanages', orphanagesController.index);
routes.post('/orphanages', upload.array('images'), orphanagesController.create);
routes.get('/orphanages/details/:id', orphanagesController.show);

export default routes;