import { Button } from "@/components/ui/button";
import { APP_URLS } from "@/routes/app-urls";
import useAuthStore from "@/shared/store/auth.store";
import { Link, Outlet, useNavigate } from "react-router-dom";


export const PrivateLayout = () => {

    const [auth] = useAuthStore()
    const isAuthenticated = auth.isAuth
    const navigate = useNavigate()

    const redirectToLogin = () => navigate(APP_URLS.AUTH.LOGIN)
    const redirectToSignout = () => navigate(APP_URLS.APP.SIGNOUT)
    if (!isAuthenticated) redirectToLogin()

    return <div aria-label="private-layout" className="h-screen overflow-auto flex flex-col">
        <div aria-label="private-layout-banner" className="bg-blue-500 text-white text-center p-2">
            <h1>Private Layout</h1>
        </div>
        <div aria-label="private-layout-header" className="flex items-center justify-between bg-slate-50 text-center p-2">
            <Link slot='h4' to={APP_URLS.ROOT}>
                <h2 className="" >Your App</h2>
            </Link>
            <Button onClick={redirectToSignout}>Logout</Button>
        </div>
        <Outlet />
    </div>

}
