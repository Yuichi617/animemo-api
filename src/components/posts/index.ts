import { Router } from 'express';
import postsAPI from './postsAPI';

// guaranteed to get dependencies
export default (): Router => {
	const app = Router();
	postsAPI(app);
	return app;
}
