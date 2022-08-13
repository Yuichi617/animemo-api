import { get, post, getById, deleteById, patch } from './usersController';
import { Router } from 'express';
import asyncErrorWrapper from '@/middlewares/asyncErrorHandleMiddleware';

export default (router: Router) => {
  // ユーザ一覧取得
  router.get('/', asyncErrorWrapper(get));

  // ユーザ登録
  router.post('/', asyncErrorWrapper(post));

  // ユーザ更新
  router.patch('/', asyncErrorWrapper(patch));

  // userIdによるユーザ検索
  router.get('/:userId', asyncErrorWrapper(getById));

  // userIdによるユーザ削除
  router.delete('/:id', asyncErrorWrapper(deleteById));
};
