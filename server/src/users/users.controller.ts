import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from "./users.service"
import { AuthService } from "./auth.service"
import { Users } from "./users.entity"

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async createUser(@Body() user: Users) {
    const email = user.email;
    const password = user.password;
    return await this.authService.signUp({ email, password });
  }

}
