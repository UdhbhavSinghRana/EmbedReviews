import { UsersService } from './users.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { comparePassword, encodePassword } from '../utils/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  signUp = async (name: string, email: string, password: string) => {
    const user = await this.userService.find(email);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const encodedPassword = await encodePassword(password);

    const createdUser = await this.userService.create(
      name,
      email,
      encodedPassword,
    );

    const payload = {
      sub: createdUser.id,
      username: createdUser.name,
      email: createdUser.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  };

  login = async (email: string, password: string) => {
    const userDB = await this.userService.find(email);
    if (!userDB) {
      throw new BadRequestException('User does not exist');
    }

    const matched = await comparePassword(password, userDB.password);
    if (!matched) throw new UnauthorizedException('Wrong password');

    const payload = {
      sub: userDB.id,
      username: userDB.name,
      email: userDB.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  };
}
