import { Module } from '@nestjs/common';

import AuthModule from '@modules/auth/auth.module';
import TodoModule from '@modules/todo/todo.module';
import UserModule from '@modules/user/user.module';
import { DatabaseModule } from '@database/database.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, TodoModule],
})
export default class MainModule {}
