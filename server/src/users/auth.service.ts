import { UsersService } from './users.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { comparePassword, encodePassword } from '../utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  signUp = async (name: string, email: string, password: string) => {
    const user = await this.userService.find(email);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const encodedPassword = await encodePassword(password);

    return await this.userService.create(name, email, encodedPassword);
  };

  login = async (email: string, password: string) => {
    const userDB = await this.userService.find(email);
    if (!userDB) {
      throw new BadRequestException('User does not exist');
    }

    const matched = await comparePassword(password, userDB.password);
    if (!matched) throw new BadRequestException('Wrong password');

    return userDB;
  };
}
