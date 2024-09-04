import { APP_URLS } from "@/routes/app-urls";
import { AuthRoutes } from "@/routes/auth-routes";
import { HomeRoutes } from "@/routes/home-routes";
import { PrivateRoutes } from "@/routes/private-routes";
import { Outlet, Route, Routes } from "react-router-dom";
import CatchAllPage from "src/client/pages/catch-all.page";
import useAuthStore from "src/shared/store/auth.store";

const AppLayout = () => {
    const [auth] = useAuthStore()
    const { initAuthChecked } = auth

    if (!initAuthChecked) return <div>Loading...</div>
    return <Outlet />
}


const AppRoutes = () => {
    return (
        <Routes >
            <Route element={<AppLayout />} >
                <Route path={APP_URLS.FOLDER} element={<HomeRoutes />} />
                <Route path={APP_URLS.APP.FOLDER} element={<PrivateRoutes />} />
                <Route path={APP_URLS.AUTH.FOLDER} element={<AuthRoutes />} />
                {/* Catch all route */}
                <Route path="*" element={<CatchAllPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes