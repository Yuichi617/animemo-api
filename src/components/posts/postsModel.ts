import { db } from '@/utils/firestore';
import { FieldValue } from 'firebase-admin/firestore';
import { Post } from '@/types/post/entity';
import { PostPatchParam, PostPostParam } from '@/types/post/form';
import { dateToString } from '@/utils/dateToString';

const postsRef = db.collection('posts');

export const selectAll = async (): Promise<Post[]> => {
  const posts: Post[] = [];

  const querySnapshot = await postsRef.where('deleteFlag', '==', false).get();
  querySnapshot.forEach(postDoc => {
    const tmp: Post = {
      id: postDoc.id,
      animeName: postDoc.data().animeName,
      rating: postDoc.data().rating,
      createdAt: dateToString(postDoc.data().createdAt.toDate()),
    };
    posts.push(tmp);
  });

  return posts;
};

export const selectByUser = async (user: string): Promise<Post[]> => {
  const posts: Post[] = [];

  const querySnapshot = await postsRef.where('user', '==', user).where('deleteFlag', '==', false).get();
  querySnapshot.forEach(postDoc => {
    const tmp: Post = {
      id: postDoc.id,
      animeName: postDoc.data().animeName,
      rating: postDoc.data().rating,
      createdAt: dateToString(postDoc.data().createdAt.toDate()),
    };
    posts.push(tmp);
  });

  return posts;
};

export const insert = async (param: PostPostParam): Promise<Post> => {
  const postRef = postsRef.doc();
  const data = {
    user: param.user,
    animeName: param.animeName,
    rating: param.rating,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
    deletedAt: null,
    deleteFlag: false,
  };
  await postRef.set(data);

  const postDoc = await postRef.get();
  return {
    id: postDoc.id,
    user: postDoc.data().user,
    animeName: postDoc.data().animeName,
    rating: postDoc.data().rating,
  };
};

export const update = async (param: PostPatchParam): Promise<Post> => {
  const postRef = postsRef.doc(param.id);
  const data = {
    userName: param.user,
    animeName: param.animeName,
    rating: param.rating,
    updatedAt: FieldValue.serverTimestamp(),
  };
  await postRef.update(data);

  const postDoc = await postRef.get();
  return {
    id: postDoc.id,
    user: postDoc.data().userName,
    animeName: postDoc.data().animeName,
    rating: postDoc.data().rating,
  };
};

export const deleteById = async (id: string) => {
  const postRef = postsRef.doc(id);
  await postRef.update({
    deleteFlag: true,
  });
};
