import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPE_ORM_MODULE_OPTIONS } from './database.config';

@Module({
  imports: [TypeOrmModule.forRoot(TYPE_ORM_MODULE_OPTIONS)],
})
export class DatabaseModule {}
