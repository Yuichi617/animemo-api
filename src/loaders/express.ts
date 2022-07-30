import express from 'express';
import cors from 'cors';
import usersRoute from '@/components/users'
import postsRoute from '@/components/posts'
import errorHandler from '@/handlers/errorHandler';
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@/utils/CustomError';
import accessLogger from '@/middlewares/accessLogger';

export default async ({ app }: { app: express.Application }) => {

  app.use(accessLogger);
  /**
   * Health Check endpoints
   */
  app.get('/status', (req: Request, res: Response) => { res.status(200).end(); });
  app.head('/status', (req: Request, res: Response) => { res.status(200).end(); });

  app.use(cors());
  app.use(express.json());

  // ルーティング処理
  app.use("/v1/users", usersRoute());
  app.use("/v1/posts", postsRoute());

  // どのルートにもマッピングされない場合、404エラーをセットする
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new CustomError(404, "Not Found");
    next(err);
  });

  // エラーハンドリング
  app.use((err, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res)
  });
};