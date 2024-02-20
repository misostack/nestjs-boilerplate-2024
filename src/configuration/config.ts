import 'dotenv/config';

type NodeEnv = 'development' | 'test' | 'production';
const supportNodeEnviroments = {
  development: 'development',
  test: 'test',
  production: 'production',
};
const PORT: number = parseInt(process.env.PORT) || 1337;
const DB_URL: string = process.env.DB_URL;
const DB_CHARSET: string = process.env.DB_CHARSET;
const DB_PREFIX: string = process.env.DB_PREFIX;
const DB_LOGGING: boolean = process.env.DB_LOGGING === 'true';
const NODE_ENV: NodeEnv =
  supportNodeEnviroments[process.env.NODE_ENV] || 'production';

// check required env params
const requiredVariables = { DB_URL, DB_CHARSET, DB_PREFIX };
Reflect.ownKeys(requiredVariables).map((key) => {
  if (!requiredVariables[key]) {
    throw new Error(
      `${key.toString()} is required! Please recheck your configuration`,
    );
  }
});

export { PORT, NODE_ENV, DB_URL, DB_CHARSET, DB_PREFIX, DB_LOGGING };
