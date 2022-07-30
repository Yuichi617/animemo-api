import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import config from '@/config';

const serviceAccount = config.serviceAccountKey as any;

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
