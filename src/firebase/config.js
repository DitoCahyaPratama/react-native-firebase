import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDJAsvdD-k9STcIjeo_lSpR9LTd-Dfm5xA',
  authDomain: 'society-5dfde.firebaseapp.com',
  databaseURL: 'https://society-5dfde.firebaseio.com',
  projectId: 'society-5dfde',
  storageBucket: 'society-5dfde.appspot.com',
  messagingSenderId: '940736579041',
  appId: '1:940736579041:android:10a6b6fac6fd7d149cbea0',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };