import { appEnvVars } from "src/shared/config/env/env.schema";

export const envConfig = {
    // APP_URL: appEnvVars.VITE_APP_URL,
    // LOCAL_INFRA_SERVER_URL: appEnvVars.VITE_LOCAL_INFRA_SERVER_URL,
    // AWS_INFRA_SERVER_URL: appEnvVars.VITE_AWS_INFRA_SERVER_URL,
    APP_ENV: appEnvVars.VITE_APP_ENV,
    NODE_ENV: appEnvVars.MODE,
    FIREBASE: {
        // AUTH_EMULATOR_URL: appEnvVars.VITE_AUTH_EMULATOR_URL,
        API_KEY: appEnvVars.VITE_FIREBASE_API_KEY,
        AUTH_DOMAIN: appEnvVars.VITE_FIREBASE_AUTH_DOMAIN,
        PROJECT_ID: appEnvVars.VITE_FIREBASE_PROJECT_ID,
        STORAGE_BUCKET: appEnvVars.VITE_FIREBASE_STORAGE_BUCKET,
        MESSAGE_SENDER_ID: appEnvVars.VITE_FIREBASE_MESSAGE_SENDER_ID,
        APP_ID: appEnvVars.VITE_FIREBASE_APP_ID,
        MEASUREMENT_ID: appEnvVars.VITE_FIREBASE_MEASUREMENT_ID,
    },
};
