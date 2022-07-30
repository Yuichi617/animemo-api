import { findAllPost, findPostByUser, savePost, deletePost, editPost } from './postsService';
import { Request, Response, NextFunction } from 'express';

  // 投稿取得
  export const get = async (req: Request, res: Response, next: NextFunction) => {
    if(req.query.user != null) {
        const user = req.query.user as string
        return res.json(await findPostByUser(user)).status(200);
    } else {
        return res.json(await findAllPost()).status(200);
    }
  };

  // 投稿登録
  export const post = async (req: Request, res: Response, next: NextFunction) => {
    return res.json(await savePost(req.body)).status(201);
  };

   // 投稿更新
   export const patch = async (req: Request, res: Response, next: NextFunction) => {
    return res.json(await editPost(req.body)).status(200);
  };

  // idによる投稿削除
  export const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    await deletePost(req.params.id);
    return res.status(204).end();
  };
  