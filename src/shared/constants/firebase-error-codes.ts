/**
 * The FIREBASE_ERROR_CODES constant is an object that maps Firebase error codes to human-readable descriptions
 * This object is used to provide more user-friendly error messages when Firebase operations fail.
 * While the codes and messages are based on the Firebase documentation, the messages have been customized for this application. (however comments still reference the original Firebase messages)
 * @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#error-codes
 * 
 * Although the error codes are for Admin SDK, most of them are also applicable to the client SDKs.
 */
export const FIREBASE_ERROR_CODES = {
    defaultMessage: 'A Firebase error occurred. Please try again later.',
    auth: [
        // authClaimsTooLarge
        {
            code: 'auth/claims-too-large',
            message: 'The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.', // The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.
        },
        // emailAlreadyInUse
        {
            code: 'auth/email-already-in-use',
            message: 'Email already in use. Please try again.', // The provided email is already in use by an existing user. Each user must have a unique email.
        },
        // emailAlreadyExists
        {
            code: 'auth/email-already-exists',
            message: 'Email already exists. Please try again.', // The provided email is already in use by an existing user. Each user must have a unique email.
        },
        // idTokenExpired
        {
            code: 'auth/id-token-expired',
            message: 'The provided Firebase ID token is expired.', // The provided Firebase ID token is expired.
        },
        // idTokenRevoked
        {
            code: 'auth/id-token-revoked',
            message: 'The Firebase ID token has been revoked.', // The Firebase ID token has been revoked.
        },
        // insufficientPermission
        {
            code: 'auth/insufficient-permission',
            message: 'Insufficient permission. Please try again.', // The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource.
        },
        // internalError
        {
            code: 'auth/internal-error',
            message: 'Internal error. Please try again.', // The Authentication server encountered an unexpected error while trying to process the request.
        },
        // invalidOobCode
        {
            code: 'auth/invalid-action-code',
            message: 'Invalid action code. Please try again.', // The action code is invalid. This can happen if the code is malformed or has already been used.
        },
        // invalidArgument
        {
            code: 'auth/invalid-argument',
            message: 'An invalid argument was provided to an Authentication method.', // An invalid argument was provided to an Authentication method.
        },
        // invalidClaims
        {
            code: 'auth/invalid-claims',
            message: 'The custom claim attributes provided to setCustomUserClaims() are invalid.', // The custom claim attributes provided to setCustomUserClaims() are invalid.
        },
        // invalidContinueUri
        {
            code: 'auth/invalid-continue-uri',
            message: 'Invalid continue URL. Please try again.', // The continue URL must be a valid URL string.
        },
        // invalidCreationTime
        {
            code: 'auth/invalid-creation-time',
            message: 'Invalid creation time. Please try again.', // The creation time must be a valid UTC date string.
        },
        // invalidCredential
        {
            code: 'auth/invalid-credential',
            message: 'Invalid credentials. Please try again.', // The credential used to authenticate the Admin SDKs cannot be used to perform the desired action.
        },
        // invalidDisabledField
        {
            code: 'auth/invalid-disabled-field',
            message: 'Invalid disabled field. Please try again.', // The provided value for the disabled user property is invalid. It must be a boolean.
        },
        // invalidDisplayName
        {
            code: 'auth/invalid-display-name',
            message: 'Invalid display name. Please try again.', // The provided value for the displayName user property is invalid. It must be a non-empty string.
        },
        // invalidDynamicLinkDomain
        {
            code: 'auth/invalid-dynamic-link-domain',
            message: 'Invalid dynamic link domain. Please try again.', // The provided dynamic link domain is not configured or authorized for the current project.
        },
        // invalidEmail
        {
            code: 'auth/invalid-email',
            message: 'Invalid email address. Please enter a valid email.', // The provided value for the email user property is invalid. It must be a string email address.
        },
        // invalidEmailVerified
        {
            code: 'auth/invalid-email-verified',
            message: 'Invalid email verified. Please try again.', // The provided value for the emailVerified user property is invalid. It must be a boolean.
        },
        // invalidHashAlgorithm
        {
            code: 'auth/invalid-hash-algorithm',
            message: 'Invalid hash algorithm. Please try again.', // The hash algorithm must match one of the strings in the list of supported algorithms.
        },
        // invalidHashBlockSize
        {
            code: 'auth/invalid-hash-block-size',
            message: 'Invalid hash block size. Please try again.', // The hash block size must be a valid number.
        },
        // invalidHashDerivedKeyLength
        {
            code: 'auth/invalid-hash-derived-key-length',
            message: 'Invalid hash derived key length. Please try again.', // The hash derived key length must be a valid number.
        },
        // invalidHashKey
        {
            code: 'auth/invalid-hash-key',
            message: 'Invalid hash key. Please try again.', // The hash key must a valid byte buffer.
        },
        // invalidHashMemoryCost
        {
            code: 'auth/invalid-hash-memory-cost',
            message: 'Invalid hash memory cost. Please try again.', // The hash memory cost must be a valid number.
        },
        // invalidHashParallelization
        {
            code: 'auth/invalid-hash-parallelization',
            message: 'Invalid hash parallelization. Please try again.', // The hash parallelization must be a valid number.
        },
        // invalidHashRounds
        {
            code: 'auth/invalid-hash-rounds',
            message: 'Invalid hash rounds. Please try again.', // The hash rounds must be a valid number.
        },
        // invalidHashSaltSeparator
        {
            code: 'auth/invalid-hash-salt-separator',
            message: 'Invalid hash salt separator. Please try again.', // The hashing algorithm salt separator field must be a valid byte buffer.
        },
        // invalidIdToken
        {
            code: 'auth/invalid-id-token',
            message: 'Invalid ID token. Please try again.', // The provided ID token is not a valid Firebase ID token.
        },
        // invalidLastSignInTime
        {
            code: 'auth/invalid-last-sign-in-time',
            message: 'Invalid last sign in time. Please try again.', // The last sign-in time must be a valid UTC date string.
        },
        // invalidPageToken
        {
            code: 'auth/invalid-page-token',
            message: 'Invalid page token. Please try again.', // The provided next page token in listUsers() is invalid. It must be a valid non-empty string.
        },
        // invalidPassword
        {
            code: 'auth/invalid-password',
            message: 'Invalid password. Please try again.', // The provided value for the password user property is invalid. It must be a string with at least six characters.
        },
        // invalidPasswordHash
        {
            code: 'auth/invalid-password-hash',
            message: 'Invalid password hash. Please try again.', // The password hash must be a valid byte buffer.
        },
        // invalidPasswordSalt
        {
            code: 'auth/invalid-password-salt',
            message: 'Invalid password salt. Please try again.', // The password salt must be a valid byte buffer
        },
        // invalidPhoneNumber
        {
            code:

                'auth/invalid-phone-number',
            message: 'Invalid phone number. Please try again.', // The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.
        },
        // invalidPhotoUrl
        {
            code: 'auth/invalid-photo-url',
            message: 'Invalid photo URL. Please try again.', // The provided value for the photoURL user property is invalid. It must be a string URL.
        },
        // invalidProviderData
        {
            code: 'auth/invalid-provider-data',
            message: 'Invalid provider data. Please try again.', // The providerData must be a valid array of UserInfo objects.
        },
        // invalidProviderId
        {
            code: 'auth/invalid-provider-id',
            message: 'Invalid provider ID. Please try again.', // The providerId must be a valid supported provider identifier string.
        },
        // invalidOAuthResponseType
        {
            code: 'auth/invalid-oauth-responsetype',
            message: 'Invalid OAuth response type. Please try again.', // Only exactly one OAuth responseType should be set to true.
        },
        // invalidSessionCookieDuration
        {
            code: 'auth/invalid-session-cookie-duration',
            message: 'Invalid session cookie duration. Please try again.', // The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.
        },
        // invalidUid
        {
            code: 'auth/invalid-uid',
            message: 'Invalid UID. Please try again.', // The provided uid must be a non-empty string with at most 128 characters.
        },
        // invalidUserImport
        {
            code: 'auth/invalid-user-import',
            message: 'Invalid user import. Please try again.', // The user record to import is invalid.
        },
        // maximumUserCountExceeded
        {
            code: 'auth/maximum-user-count-exceeded',
            message: 'Maximum user count exceeded. Please try again.', // The maximum allowed number of users to import has been exceeded.
        },
        // missingAndroidPkgName
        {
            code: 'auth/missing-android-pkg-name',
            message: 'Missing Android package name. Please try again.', // An Android Package Name must be provided if the Android App is required to be installed.
        },
        // missingContinueUri
        {
            code: 'auth/missing-continue-uri',
            message: 'Missing continue URL. Please try again.', // A valid continue URL must be provided in the request.
        },
        // missingHashAlgorithm
        {
            code: 'auth/missing-hash-algorithm',
            message: 'Missing hash algorithm. Please try again.', // Importing users with password hashes requires that the hashing algorithm and its parameters be provided.
        },
        // missingIosBundleId
        {
            code: 'auth/missing-ios-bundle-id',
            message: 'Missing iOS bundle ID. Please try again.', // The request is missing a Bundle ID.
        },
        // missingUid
        {
            code: 'auth/missing-uid',
            message: 'Missing UID. Please try again.', // A uid identifier is required for the current operation.
        },
        // missingOAuthClientSecret
        {
            code: 'auth/missing-oauth-client-secret',
            message: 'Missing OAuth client secret. Please try again.', // The OAuth configuration client secret is required to enable OIDC code flow.
        },
        // operationNotAllowed
        {
            code: 'auth/operation-not-allowed',
            message: 'Operation not allowed. Please try again.', // The provided sign-in provider is disabled for your Firebase project.
        },
        // phoneNumberAlreadyExists
        {
            code: 'auth/phone-number-already-exists',
            message: 'Phone number already exists. Please try again.', // The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.
        },
        // projectNotFound
        {
            code: 'auth/project-not-found',
            message: 'Project not found. Please try again.', // No Firebase project was found for the credential used to initialize the Admin SDKs.
        },
        // reservedClaims
        {
            code: 'auth/reserved-claims',
            message: 'Reserved claims. Please try again.', // One or more custom user claims provided to setCustomUserClaims() are reserved.
        },
        // sessionCookieExpired
        {
            code: 'auth/session-cookie-expired',
            message: 'Session cookie expired. Please try again.', // The provided Firebase session cookie is expired.
        },
        // sessionCookieRevoked
        {
            code: 'auth/session-cookie-revoked',
            message: 'Session cookie revoked. Please try again.', // The Firebase session cookie has been revoked.
        },
        // tooManyRequests
        {
            code: 'auth/too-many-requests',
            message: 'Too many requests. Please try again.', // The number of requests exceeds the maximum allowed.
        },
        // uidAlreadyExists
        {
            code: 'auth/uid-already-exists',
            message: 'UID already exists. Please try again.', // The provided uid is already in use by an existing user. Each user must have a unique uid.
        },
        // unauthorizedContinueUri
        {
            code: 'auth/unauthorized-continue-uri',
            message: 'Unauthorized continue URL. Please try again.', // The domain of the continue URL is not whitelisted.
        },
        // userNotFound
        {
            code: 'auth/user-not-found',
            message: 'User not found. Please check the email address.', // There is no existing user record corresponding to the provided identifier.
        },
    ],
};