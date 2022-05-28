import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC7ICudHuTg9HTFl4iiLdaqr7G23A0ImpQ",
    authDomain: "taskmanager-eaa6f.firebaseapp.com",
    projectId: "taskmanager-eaa6f",
    storageBucket: "taskmanager-eaa6f.appspot.com",
    messagingSenderId: "169758951285",
    appId: "1:169758951285:web:3bae19da9138844ef1753c",
    measurementId: "G-TR06H48T53"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}

  