import { Injectable } from '@nestjs/common';
export class CrudQuery {}

/**
 * This service use Dto, Entity as Generic Type
 *
 */
export interface ICrudService<ID, Dto, Entity, Query extends CrudQuery> {
  create(object: Dto): Promise<Entity>;
  create(objects: Dto[]): Promise<Entity[]>;
  retrieve(id: ID): Promise<Entity>;
  retrieve(query: Query): Promise<Entity[]>;
  count(query: Query): Promise<number>;
  update(id: ID, object: Dto): Promise<Entity>;
  update(objects: Dto[]): Promise<Entity[]>;
  delete(id: ID): Promise<boolean>;
  delete(query: Query): Promise<boolean>;
}

@Injectable()
export abstract class CrudService<ID, Dto, Entity, Query extends CrudQuery>
  implements ICrudService<ID, Dto, Entity, Query>
{
  create(object: Dto): Promise<Entity>;
  create(objects: Dto[]): Promise<Entity[]>;
  create(objects: unknown): Promise<Entity> | Promise<Entity[]> {
    throw new Error('Method not implemented.');
  }
  retrieve(id: ID): Promise<Entity>;
  retrieve(query: Query): Promise<Entity[]>;
  retrieve(query: unknown): Promise<Entity> | Promise<Entity[]> {
    throw new Error('Method not implemented.');
  }
  count(query: Query): Promise<number> {
    throw new Error('Method not implemented.');
  }
  update(id: ID, object: Dto): Promise<Entity>;
  update(objects: Dto[]): Promise<Entity[]>;
  update(id: unknown, object?: unknown): Promise<Entity> | Promise<Entity[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: ID): Promise<boolean>;
  delete(query: Query): Promise<boolean>;
  delete(query: unknown): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
