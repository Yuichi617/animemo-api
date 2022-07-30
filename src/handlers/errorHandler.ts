import Logger from '@/utils/logger';
import { Request, Response } from 'express';

// エラー処理ハンドラ
export default (err, req: Request, res: Response) => {
    const hostname = req.hostname;
    const ip = req.ip;
    const method = req.method;
    const path = req.path;
    const status = err.status;
    const message = err.message;
    Logger.error(`hosname:${hostname}, ip:${ip}, method:${method}, path:${path}, status:${status}, message:${message}`);
    res.status(err.status || 500);
    res.json({
        error: {
            code: err.status || 500,
            message: err.message || 'Internal Server Error',
        },
    });
}