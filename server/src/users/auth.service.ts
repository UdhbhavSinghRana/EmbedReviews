import { UsersService } from './users.service';
import { BadRequestException } from '@nestjs/common';
import { encodePassword } from '../utils/bcrypt';

export class AuthService {
  constructor(private userService: UsersService) {}

  signUp = async (email: string, password: string) => {
    const user = await this.userService.find(email);
    if (user.length) {
      throw new BadRequestException('User already exists');
    }

    const encodedPassword = await encodePassword(password);

    return await this.userService.create(email, encodedPassword);
  };
}
