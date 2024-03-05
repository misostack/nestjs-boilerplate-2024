import { Repository } from 'typeorm';

export abstract class CrudRepository<Entity> extends Repository<Entity> {}
