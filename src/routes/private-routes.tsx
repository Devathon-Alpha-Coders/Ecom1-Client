import CartPage from "@/client/pages/cart.page";
import CheckoutPage from "@/client/pages/checkout.page";
import DashboardPage from "@/client/pages/dashboard.page";
import SignoutPage from "@/client/pages/signout.page";
import { PrivateLayout } from "@/client/shared-views/private-layout";
import { APP_URLS } from "@/routes/app-urls";
import { getLayoutRelativePath } from "@/shared/utils/string.utils";
import { Route, Routes } from "react-router-dom";
import CatchAllPage from "src/client/pages/catch-all.page";
import ProductsPage from "src/client/pages/products.page";

const PRIVATE_URLS = APP_URLS.APP
// removes the prefix aPP from the urls
const getAppRelativePath = (path: string) =>
    getLayoutRelativePath(path, PRIVATE_URLS.ROOT);


export const PrivateRoutes = () => {
    return <Routes>
        <Route element={<PrivateLayout />} >
            <Route path={getAppRelativePath(PRIVATE_URLS.ROOT)} element={<DashboardPage />} />
            <Route path={getAppRelativePath(PRIVATE_URLS.CHECKOUT)} element={<CheckoutPage />} />
            <Route path={getAppRelativePath(PRIVATE_URLS.CART)} element={<CartPage />} />
            <Route path={getAppRelativePath(PRIVATE_URLS.SIGNOUT)} element={<SignoutPage />} />
            <Route path={getAppRelativePath(PRIVATE_URLS.PRODUCTS)} element={<ProductsPage />} />
            {/* Catch all route */}
            <Route path="*" element={<CatchAllPage />} />
        </Route>
    </Routes>;
};
