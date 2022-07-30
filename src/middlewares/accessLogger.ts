import Logger from '@/utils/logger';
import { Request } from 'express';

export default (req :Request, res, next) => {
    const hostname = req.hostname;
    const ip = req.ip;
    const cookies = req.cookies;
    const method = req.method;
    const path = req.path;
    const body = req.body;
    const params = JSON.stringify(req.params);
    const query = JSON.stringify(req.query);

    Logger.info(`hostname:${hostname}, ip:${ip}, cookies:${cookies}, method:${method}, path:${path}, body:${body}, params:${params}, query:${query}`);
    next();
}