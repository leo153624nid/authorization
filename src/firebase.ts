import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyDJsGzF-8_DJqDZjjCalKhPhJE_ZeG-eEo',
    authDomain: 'authorization-d9f5f.firebaseapp.com',
    projectId: 'authorization-d9f5f',
    storageBucket: 'authorization-d9f5f.appspot.com',
    messagingSenderId: '595557768689',
    appId: '1:595557768689:web:eca8a5301daacf98c77850',
}

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// }

const app = initializeApp(firebaseConfig)
