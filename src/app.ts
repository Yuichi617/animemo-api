import config from './config/env';
import express from 'express';
import Logger from '@/libs/logger';

async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('./loaders').default({ expressApp: app });

  // Listen to the App Engine-specified port
  app.listen(config.port, () => {
    Logger.info(`Server listening on port: ${config.port}`);
  });
}

startServer();
