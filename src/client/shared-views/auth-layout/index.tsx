import { APP_URLS } from "@/routes/app-urls";
import useAuthStore from "@/shared/store/auth.store";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const AuthLayout = () => {

    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const redirectTo = searchParams.get('redirectTo')

    const [auth] = useAuthStore()
    const isAuthenticated = auth.isAuth

    const navigate = useNavigate()

    const redirectToApp = () => navigate(redirectTo ?? APP_URLS.ROOT)

    useEffect(() => {
        if (isAuthenticated) redirectToApp()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated])


    return <div>
        <div className="bg-slate-900 text-white text-center p-2">
            <div>{auth.user?.email}</div>
            <h1>Auth Layout</h1>
        </div>
        <Outlet />
    </div>

}
