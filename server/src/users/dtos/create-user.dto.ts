import { Exclude, Expose } from 'class-transformer';

export class CreateUserDto {
  @Expose()
  name: string;
  @Expose()
  email: string;
  @Exclude()
  password: string;
}
