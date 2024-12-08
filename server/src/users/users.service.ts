import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async create(name: string, email: string, password: string) {
    const user = this.usersRepository.create({ name, email, password });
    return await this.usersRepository.save(user);
  }

  async find(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }
}
