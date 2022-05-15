import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZox5XB1E8JXV3ElqkQp1JgRL_KtliOoA",
    authDomain: "yumyum-restaurant.firebaseapp.com",
    databaseURL: "https://yumyum-restaurant-default-rtdb.firebaseio.com",
    projectId: "yumyum-restaurant",
    storageBucket: "yumyum-restaurant.appspot.com",
    messagingSenderId: "492623350366",
    appId: "1:492623350366:web:fcaf1f523a946c9f3502cf",
    measurementId: "G-12VPDNV2S1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };