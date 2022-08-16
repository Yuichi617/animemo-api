import { db } from '@/libs/firestore';
import { FieldValue } from 'firebase-admin/firestore';
import { User } from '@/types/user/entity';
import { UserPatchParam, UserPostParam } from '@/types/user/form';

const usersRef = db.collection('users');

export const selectAll = async (): Promise<User[]> => {
  const users: User[] = [];

  const querySnapshot = await usersRef.where('deleteFlag', '==', false).get();
  querySnapshot.forEach(userDoc => {
    const tmp: User = {
      id: userDoc.id,
      userName: userDoc.data().userName,
      userStatus: userDoc.data().userStatus,
    };
    users.push(tmp);
  });

  return users;
};

export const insert = async (param: UserPostParam): Promise<User> => {
  const userRef = usersRef.doc();
  const data = {
    userName: param.userName,
    userStatus: param.userStatus,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
    deletedAt: null,
    deleteFlag: false,
  };
  await userRef.set(data);

  const userDoc = await userRef.get();
  return {
    id: userDoc.id,
    userName: userDoc.data().userName,
    userStatus: userDoc.data().userStatus,
  };
};

export const selectById = async (id: string): Promise<User> => {
  const userRef = usersRef.doc(id);
  const userDoc = await userRef.get();
  return {
    id: userDoc.id,
    userName: userDoc.data().userName,
    userStatus: userDoc.data().userStatus,
  };
};

export const update = async (param: UserPatchParam): Promise<User> => {
  const userRef = usersRef.doc(param.id);
  const data = {
    userName: param.userName,
    userStatus: param.userStatus,
    updatedAt: FieldValue.serverTimestamp(),
  };
  await userRef.update(data);

  const userDoc = await userRef.get();
  return {
    id: userDoc.id,
    userName: userDoc.data().userName,
    userStatus: userDoc.data().userStatus,
  };
};

export const deleteById = async (id: string) => {
  const userRef = usersRef.doc(id);
  await userRef.update({
    deleteFlag: true,
  });
};
