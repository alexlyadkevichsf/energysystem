import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "site-electro-fbee2.firebaseapp.com",
  projectId: "site-electro-fbee2",
  storageBucket: "site-electro-fbee2.appspot.com",
  messagingSenderId: "439607205711",
  appId: "YOUR_APP_ID"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

