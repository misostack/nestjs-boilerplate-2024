import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export default class UserModule {}
