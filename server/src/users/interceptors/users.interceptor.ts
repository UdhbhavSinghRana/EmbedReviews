import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<CreateUserDto>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((users) => {
        return plainToInstance(CreateUserDto, users);
      }),
    );
  }
}
