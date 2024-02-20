import {
  DB_CHARSET,
  DB_LOGGING,
  DB_PREFIX,
  DB_URL,
} from '@configuration/config';
import ENTITES from './entities';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const DIRNAME = __dirname;

const TYPE_ORM_MODULE_OPTIONS: TypeOrmModuleOptions = {
  type: 'mysql',
  url: DB_URL,
  entities: ENTITES,
  // MYSQL will store Timestamp in GMT ( UTC = 0)
  timezone: 'Z', // must have this, if the response date will be marked as current timezone
  charset: DB_CHARSET,
  logging: DB_LOGGING ? ['query', 'error'] : ['error'],
  // must not be synchronize automaticall, use data migration instea
  synchronize: false,
  // migrations
  migrations: [`${DIRNAME}/migrations/*.js`, `${DIRNAME}/migrations/*.ts`],
  migrationsTableName: `${DB_PREFIX}_migrations`,
  // use custom repository
  autoLoadEntities: false,
};

export { TYPE_ORM_MODULE_OPTIONS };
