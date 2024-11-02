import 'dotenv/config';
import * as joi from 'joi';

interface Config {
  PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  DB_HOST: string;
  DB_PORT?: number;
}

const schema = joi
  .object({
    PORT: joi.number().required(),
    DB_USERNAME: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_DATABASE: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_PORT: joi.number(),
  })
  .unknown(true)
  .required();

const { error, value } = schema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config: Config = {
  PORT: value.PORT,
  DB_USERNAME: value.DB_USERNAME,
  DB_PASSWORD: value.DB_PASSWORD,
  DB_DATABASE: value.DB_DATABASE,
  DB_HOST: value.DB_HOST,
  DB_PORT: value.DB_PORT,
};
