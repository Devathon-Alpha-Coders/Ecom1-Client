/**
 * * ******* CONVENTIONS ********* * *
 * 
 * * Only create a nested object if the routes for that will be refactored into a separate `routes` component. i.e. `AuthRoutes`
 * * Always start a route with a `/` (forward slash)
 */

export const APP_URLS = {
    // ? Public
    ROOT: '/',
    FOLDER: '/*',
    CATCH_ALL: '*',

    HOME: {
        ROOT: '/',
        FOLDER: '/*',
    },
    // ? Auth
    AUTH: {
        ROOT: '/auth/',
        FOLDER: '/auth/*',
        LOGIN: '/auth/login',
        SIGNUP: '/auth/signup',
        FORGET_PASSWORD: '/auth/forget-password',
        RESET_PASSWORD: '/auth/reset-password',
    },
    // ? App
    APP: {
        SIGNOUT: '/app/signout/',
        ROOT: '/app/',
        FOLDER: '/app/*',
        CART: '/app/cart/',
        CHECKOUT: '/app/checkout/',
    },

}