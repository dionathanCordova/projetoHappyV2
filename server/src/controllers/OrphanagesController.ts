import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

import Orphanages from '../models/Orphanages';

export default {
   async index(request: Request, response: Response) {
      const orphanagesRepository = getRepository(Orphanages);
      const orphanagesList = await orphanagesRepository.find({
         where: { isConfirm: true },
         relations: ['images']
      });

      return response.status(200).json(orphanageView.renderMany(orphanagesList));
   },

   async show(request: Request, response: Response) {
      const { id } = request.params;

      const orphanagesRepository = getRepository(Orphanages);
      const orphanagesDetail = await orphanagesRepository.findOneOrFail({
         where: { id },
         relations: ['images']
      });

      return response.status(200).json(orphanageView.render(orphanagesDetail));
   },

   async create(request: Request, response: Response) {
      try {
         const { name, latitude, longitude, about, instruction, opening_hours, open_on_weekends, isConfirm, user_id } = request.body;

         const orphanagesRepository = getRepository(Orphanages);

         const requestImages = request.files as Express.Multer.File[];

         const images = requestImages.map(image => {
            return { path: image.filename }
         })

         const data = {
            name,
            latitude,
            longitude,
            about,
            open_on_weekends: open_on_weekends === 'true',
            isConfirm: isConfirm == 'true',
            opening_hours,
            instruction,
            user: user_id,
            images
         };
         
         const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            open_on_weekends: Yup.boolean().required(),
            isConfirm: Yup.boolean().required(),
            user: Yup.string().required(),
            opening_hours: Yup.string().required(),
            instruction: Yup.string().required(),
            images: Yup.array(
               Yup.object().shape({
                  path: Yup.string().required()
               })
            )
         })

         console.log(data);

         await schema.validate(data, {
            abortEarly: false
         })

         const createOrphanages = orphanagesRepository.create(data);

         await orphanagesRepository.save(createOrphanages);

         return response.status(201).json({ createOrphanages });
      } catch (error) {
         return response.status(404).json({ message: error.message });
      }

   }
}