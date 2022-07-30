import { findAllUser, saveUser, getUser, deleteUser, editUser } from './usersService';
import { Request, Response, NextFunction } from 'express';

// ユーザ一覧取得
export const get = async (req: Request, res: Response, next: NextFunction) => {
  return res.json(await findAllUser()).status(200);
};

// ユーザ登録
export const post = async (req: Request, res: Response, next: NextFunction) => {
  return res.json(await saveUser(req.body)).status(201);
};

// ユーザ更新
export const patch = async (req: Request, res: Response, next: NextFunction) => {
  return res.json(await editUser(req.body)).status(200);
};

// userIdによるユーザ検索
export const getById = async (req: Request, res: Response, next: NextFunction) => {
  return res.json(await getUser(req.params.userId)).status(200);
};

// userIdによるユーザ削除
export const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  await deleteUser(req.params.userId);
  return res.status(204).end();
};
