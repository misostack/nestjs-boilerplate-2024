import { Module } from '@nestjs/common';

import AuthModule from '@modules/auth/auth.module';
import TodoModule from '@modules/todo/todo.module';
import UserModule from '@modules/user/user.module';

@Module({
  imports: [UserModule, AuthModule, TodoModule],
})
export default class MainModule {}
