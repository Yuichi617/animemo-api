import { Router } from 'express';
import usersAPI from './usersAPI';

// guaranteed to get dependencies
export default (): Router => {
  const app = Router();
  usersAPI(app);
  return app;
};
