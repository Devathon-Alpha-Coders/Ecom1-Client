import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { envConfig } from "src/shared/config/env/env.config";

const firebaseConfig = {
    apiKey: envConfig.FIREBASE.API_KEY,
    authDomain: envConfig.FIREBASE.AUTH_DOMAIN,
    projectId: envConfig.FIREBASE.PROJECT_ID,
    storageBucket: envConfig.FIREBASE.STORAGE_BUCKET,
    messagingSenderId: envConfig.FIREBASE.MESSAGE_SENDER_ID,
    appId: envConfig.FIREBASE.APP_ID,
    measurementId: envConfig.FIREBASE.MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the authentication service
export const firebaseAuth = getAuth(firebaseApp);

// const analytics = getAnalytics(app);