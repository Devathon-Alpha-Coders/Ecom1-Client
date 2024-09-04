const rawEnv = import.meta.env;
import { z } from 'zod';

const modeSchema = z.union([
    z.literal('development'),
    z.literal('production'),
]).default('development');
const appEnvSchema = z.union([
    z.literal('development'),
    z.literal('preview'),
    z.literal('production'),
]).default('development');

// Environment configuration
// Create environment variables Schema using zod
const envSchema = z.object({
    // VITE_APP_URL: z.string(),
    // VITE_LOCAL_INFRA_SERVER_URL: z.string(),
    // VITE_AWS_INFRA_SERVER_URL: z.string(),
    MODE: modeSchema,
    VITE_APP_ENV: appEnvSchema,
    VITE_FIREBASE_API_KEY: z.string(),
    VITE_FIREBASE_AUTH_DOMAIN: z.string(),
    VITE_FIREBASE_PROJECT_ID: z.string(),
    VITE_FIREBASE_STORAGE_BUCKET: z.string(),
    VITE_FIREBASE_MESSAGE_SENDER_ID: z.string(),
    VITE_FIREBASE_APP_ID: z.string(),
    VITE_FIREBASE_MEASUREMENT_ID: z.string()
})

// Parse and validate environment variables
const { data, success, error } = envSchema.safeParse(rawEnv)

if (!success && error) {
    console.error({ message: 'Environment variables are not valid:', issues: error.issues });
    alert('Environment variables are not valid. Check console for more details.');
}

export const appEnvVars = data!
export const getEnvironment = () => appEnvVars?.MODE;
export const isProdEnvironment = () => getEnvironment() === 'production';