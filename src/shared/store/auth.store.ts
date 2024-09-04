import { atom, useAtom } from 'jotai'
import { User as FirebaseUser } from 'firebase/auth'



const DEFAULT_AUTH_STATE = {
    initAuthChecked: false,
    isAuth: false,
    user: null
}

export const UNAUTHENTICATED_AUTH_STATE = {
    initAuthChecked: true,
    isAuth: false,
    user: null
}

const authAtom = atom<{
    initAuthChecked: boolean,
    isAuth: boolean,
    // TODO: Rename to firebaseUser
    user?: FirebaseUser | null
}>(DEFAULT_AUTH_STATE)

const useAuthStore = () => {
    const stateAndSetters = useAtom(authAtom)

    return stateAndSetters
}

export default useAuthStore;