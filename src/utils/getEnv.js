import dotenv from 'dotenv';

dotenv.config();

export function getEnv(name, defaultValue) {
  const envValue = process.env[name];

  if (envValue) return envValue;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}
