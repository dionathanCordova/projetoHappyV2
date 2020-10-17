import { Router } from 'express'; 
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', orphanagesController.index);
routes.post('/orphanages', upload.array('images'), orphanagesController.create);
routes.get('/orphanages/details/:id', orphanagesController.show);

export default routes;