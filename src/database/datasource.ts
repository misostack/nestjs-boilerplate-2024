import { DataSource, DataSourceOptions } from 'typeorm';
import { TYPE_ORM_MODULE_OPTIONS } from './database.config';

const DataSourceInstance = new DataSource(
  TYPE_ORM_MODULE_OPTIONS as DataSourceOptions,
);

export default DataSourceInstance;
