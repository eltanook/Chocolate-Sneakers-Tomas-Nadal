import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyCpgVnLeDJH3uCTzbj_NSLxkDihNnYpsE4',
  authDomain: 'chocolate-sneakers.firebaseapp.com',
  projectId: 'chocolate-sneakers',
  storageBucket: 'chocolate-sneakers.appspot.com',
  messagingSenderId: '163783966707',
  appId: '1:163783966707:web:e4190478b69bca3ca1dc86'
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)