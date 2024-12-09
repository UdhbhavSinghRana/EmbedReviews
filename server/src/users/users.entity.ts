import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from '@nestjs/class-transformer';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Exclude()
  @Column()
  password: string;
}
