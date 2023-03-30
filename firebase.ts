import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAu8RobE4T5MyfjA3EPD65f2PC3kayw-3M',
  authDomain: 'brightdata-build-75111.firebaseapp.com',
  projectId: 'brightdata-build-75111',
  storageBucket: 'brightdata-build-75111.appspot.com',
  messagingSenderId: '381088356876',
  appId: '1:381088356876:web:f3a8c458365a5e2bde2c29',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
