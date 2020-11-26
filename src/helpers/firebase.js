import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import { useEffect } from 'react';

const useFirebase = () => {
  const firebaseConfig = {
    apiKey: 'redacted',
    authDomain: 'redacted',
    databaseURL: 'redacted',
    projectId: 'redacted',
    storageBucket: 'redacted',
    messagingSenderId: 'redacted',
    appId: 'redacted',
    measurementId: 'redacted',
  };

  useEffect(() => {
    async function initFb() {
      await initFirebase(firebaseConfig);
      await signUser();
    }
    initFb();
  }, []);

  return {
    firebaseConfig,
    writeNewCategory,
    readCategories,
  };
};

export default useFirebase;

const initFirebase = async (firebaseConfig) => {
  if (!firebase.apps.length) {
    await firebase.initializeApp(firebaseConfig);
  }
};

const signUser = async () => {
  await firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) await firebase.auth().signInAnonymously();
  });
};

const getUid = () => firebase.auth().currentUser.uid;
const getDb = () => firebase.database();
const getCategoriesRef = () => getDb().ref('categories/' + getUid());
const getItemsRef = () => getDb().ref('items/' + getUid());

const writeNewCategory = async (category) => await getCategoriesRef().push(category);

const readCategories = async () => await getCategoriesRef().once('value');
