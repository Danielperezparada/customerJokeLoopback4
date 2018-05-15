import {Customerjokeloopback4Application} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Customerjokeloopback4Application};

export async function main(options?: ApplicationConfig) {
  const app = new Customerjokeloopback4Application(options);
  await app.boot();
  await app.start();
  return app;
}
