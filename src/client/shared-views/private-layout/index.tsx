import { Button } from "@/components/ui/button";
import { APP_URLS } from "@/routes/app-urls";
import authAtom from "@/shared/store/auth.store";
import { useAtom } from "jotai";
import { Link, Outlet, useNavigate } from "react-router-dom";


export const PrivateLayout = () => {

    const [auth] = useAtom(authAtom)
    const isAuthenticated = auth.isAuth
    const navigate = useNavigate()

    const redirectToHome = () => navigate(APP_URLS.ROOT)
    const redirectToSignout = () => navigate(APP_URLS.APP.SIGNOUT)
    if (!isAuthenticated) redirectToHome()

    return <div>
        <div className="bg-blue-500 text-white text-center p-2">
            <h1>Private Layout</h1>
        </div>
        <div className="flex items-center justify-between bg-slate-50 text-center p-2">
            <Link slot='h4' to={APP_URLS.ROOT}>
                <h2 className="" >Your App</h2>
            </Link>
            <Button onClick={redirectToSignout}>Logout</Button>
        </div>
        <Outlet />
    </div>

}
