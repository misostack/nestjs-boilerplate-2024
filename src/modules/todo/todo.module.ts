import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo.controller';
import { TodoCategoryController } from './controllers/todo-category.controller';

@Module({
  controllers: [TodoController, TodoCategoryController]
})
export default class TodoModule {}
