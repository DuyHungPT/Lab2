// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getStorage} from 'firebase/storage';
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';
// import {getDatabase} from 'firebase/database';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const firebaseConfig = {
//   apiKey: "AIzaSyCXapyVFb6iXmu6qmnh_kW3q5bvVzzIg9Y",
//   authDomain: "mob403-su23-b2-3.firebaseapp.com",
//   projectId: "mob403-su23-b2-3",
//   storageBucket: "mob403-su23-b2-3.appspot.com",
//   messagingSenderId: "31739220617",
//   appId: "1:31739220617:web:88b3d0cdf31eb5c032ac58",
//   measurementId: "G-BBEJJ81BVZ"
// };
// // Initialize Firebase
// export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
// export const FIRESTORE_DB=getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);
// export const STORAGE=getStorage(FIREBASE_APP);
// export const DATABASE=getDatabase(FIREBASE_APP);
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxmv27zEabWQ_u3uLKq8dcSHJhInIYvfs",
  authDomain: "react2-1a4e1.firebaseapp.com",
  databaseURL: "https://react2-1a4e1-default-rtdb.firebaseio.com",
  projectId: "react2-1a4e1",
  storageBucket: "react2-1a4e1.appspot.com",
  messagingSenderId: "327756645041",
  appId: "1:327756645041:web:3332ea6203c613ca199890",
  measurementId: "G-4QV9L6X9CE"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);
export const STORAGE=getStorage(FIREBASE_APP);
export const DATABASE=getDatabase(FIREBASE_APP);