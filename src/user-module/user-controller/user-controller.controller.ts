import { Controller, Get } from '@nestjs/common';
import { UserService } from '../user-service/user-service';

@Controller('user-controller')
export class UserControllerController {
  constructor(private readonly service: UserService) {}

  @Get()
  getUsers() {
    return this.service.getUser();
  }
}
