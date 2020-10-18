import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import Image from './Image';
import User from './User';
@Entity('orphanages')
export default class Orphanages {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   name: string;

   @Column()
   latitude: number;

   @Column()
   longitude: number;

   @Column()
   about: string;

   @Column()
   instruction: string;

   @Column()
   opening_hours: string;

   @Column()
   open_on_weekends: boolean;

   @Column()
   isConfirm: boolean;

   @ManyToOne(() => User, user => user.orphanages)
   @JoinColumn({ name: 'user_id' })
   user: User;

   @OneToMany(() => Image, image => image.orphanage, {
      cascade: ['insert', 'update']
   })
   @JoinColumn({ name: 'orphanage_id' })
   images: Image[];

}