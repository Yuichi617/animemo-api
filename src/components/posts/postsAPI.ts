import { get, post, deleteById, patch } from './postsController';
import { Router } from 'express';
import asyncErrorWrapper from '@/middlewares/asyncErrorHandleMiddleware'

export default (router: Router) => {

  // 投稿覧取得
  router.get('/', asyncErrorWrapper(get));

  // 投稿登録
  router.post('/', asyncErrorWrapper(post));

  // 投稿更新
  router.patch('/', asyncErrorWrapper(patch));

  // idによる投稿削除
  router.delete('/:userId', asyncErrorWrapper(deleteById));
};
