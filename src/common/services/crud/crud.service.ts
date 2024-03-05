import { CrudRepository } from '@common/repositories/crud/crud.repository';
import { DeepPartial, Entity, SaveOptions } from 'typeorm';

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

export abstract class CrudService<ID, Dto, Entity, Query extends CrudQuery>
  implements ICrudService<ID, Dto, Entity, Query>
{
  constructor(private repository: CrudRepository<Entity>) {}
  create(data: Dto): Promise<Entity>;
  create(data: Dto[]): Promise<Entity[]>;
  create(data: unknown): Promise<Entity> | Promise<Entity[]> {
    if (Array.isArray(data)) {
      return this.repository.save(data as Entity[]);
    }
    if (typeof data == 'object') {
      return this.repository.save(data as Entity);
    }
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

type ExampleID = number;
type ExampleQuery = {
  title: string;
};
class ExampleDto {
  id: ExampleID;
  title: string;
}

@Entity()
class ExampleEntity {}
class ExampleService extends CrudService<
  ExampleID,
  ExampleDto,
  ExampleEntity,
  ExampleQuery
> {}

class ExampleRepository extends CrudRepository<ExampleEntity> {
  save<T extends DeepPartial<ExampleEntity>>(
    entities: T[],
    options: SaveOptions & { reload: false },
  ): Promise<T[]>;
  save<T extends DeepPartial<ExampleEntity>>(
    entities: T[],
    options?: SaveOptions,
  ): Promise<(T & ExampleEntity)[]>;
  save<T extends DeepPartial<ExampleEntity>>(
    entity: T,
    options: SaveOptions & { reload: false },
  ): Promise<T>;
  save<T extends DeepPartial<ExampleEntity>>(
    entity: T,
    options?: SaveOptions,
  ): Promise<T & ExampleEntity>;
  save(
    entity: unknown,
    options?: unknown,
  ): Promise<ExampleEntity[]> | Promise<ExampleEntity> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(entity);
      }, 500);
    });
  }
}
const exampleRepository: ExampleRepository = new ExampleRepository(null, null);

const exampleService: ExampleService = new ExampleService(exampleRepository);

(async () => {
  const entity = await exampleService.create({
    id: 1,
    title: 'title 1',
  });
  console.log(entity);
  const entities = await exampleService.create([
    {
      id: 1,
      title: 'title1',
    },
    {
      id: 2,
      title: 'title2',
    },
  ]);
  console.log(entities);
})();
