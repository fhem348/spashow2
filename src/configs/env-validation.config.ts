import joi from 'joi';

export const configModuleValidationSchema = joi.object({
  SERVER_PORT: joi.number().required().default(3000),
  DB_HOST: joi.string().required(),
  DB_PORT: joi.number().required().default(3306),
  DB_USERNAME: joi.string().required(),
  DB_PASSWORD: joi.string().required(),
  DB_NAME: joi.string().required(),
  DB_SYNC: joi.boolean().required().default(true),
});
