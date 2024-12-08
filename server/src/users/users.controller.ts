import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from "./users.service"

@Controller('users')
export class UsersController {
  constructor(private  userService: UsersService) {}
  @Post('/signup')
  async createUser() {
    const user = await this.
  }
}
