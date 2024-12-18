import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserInterceptor } from './interceptors/users.interceptor';

@Controller('users')
@UseInterceptors(UserInterceptor)
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return 'hello world';
  }

  @Post('/signup')
  async createUser(@Body() user: CreateUserDto) {
    const email = user.email;
    const password = user.password;
    const name = user.name;
    return await this.authService.signUp(name, email, password);
  }

  @Post('/login')
  async loginUser(@Body() user: CreateUserDto) {
    const email = user.email;
    const password = user.password;
    console.log(email, password);
    return await this.authService.login(email, password);
  }
}
