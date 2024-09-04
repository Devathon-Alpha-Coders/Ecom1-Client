import useAuthStore from "@/shared/store/auth.store";
import { useEffect } from "react";

const SignoutView = () => {

    const [_, setAuth] = useAuthStore()


    useEffect(() => {
        setAuth(prev => ({
            ...prev,
            isAuth: false
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            Signout
        </div>
    )
}

export default SignoutView