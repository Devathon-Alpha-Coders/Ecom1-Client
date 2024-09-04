import { useEffect } from "react";
import { firebaseAuth } from "src/shared/config/firebase.config";
import useAuthStore, { UNAUTHENTICATED_AUTH_STATE } from "src/shared/store/auth.store";

interface AuthContainerProps {
    children: React.ReactNode;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
    const [_, setAuth] = useAuthStore();
    // const { getAuthUser } = AuthHook.useGetAuthUser();

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {

            if (!user) {
                setAuth(UNAUTHENTICATED_AUTH_STATE);
                return;
            }


            // TODO: Append the App-User (from db) to the auth state
            setAuth({
                isAuth: true,
                user,
                initAuthChecked: true,
                // authUser: authUser
            });
            // const authUserData = await getAuthUser();
            // const authUser = authUserData.data?.data;

        });

        return () => {
            unsubscribe();
        };
    }, [setAuth])

    return (
        <>
            {children}
        </>
    )
}

export default AuthContainer;