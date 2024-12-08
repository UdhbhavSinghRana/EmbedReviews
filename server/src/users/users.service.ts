import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async create(email: string, password: string) {
    const user = await this.usersRepository.create({ email, password });
    return await this.usersRepository.save(user);
  }

  async find(email: string) {
    return await this.usersRepository.find({ where: { email } });
  }
}
