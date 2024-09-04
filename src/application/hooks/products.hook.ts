import ProductsApi from "@/api/products/products.api";
import { QUERY_KEYS } from "@/application/query-keys";
import { useSuspenseQueryWithErr } from "@/shared/hooks/use-suspense-query-with-err.hook";

export const useGetMultipleProductsHook = () => {

    // Get Agent Groups from API
    const suspenseResponse = useSuspenseQueryWithErr({
        queryKey: QUERY_KEYS.getAllProducts(),
        queryFn: async () =>
            await ProductsApi.getMultipleProducts(),
        // enabled: true
    });

    const { error, isFetching } = suspenseResponse;
    if (error && !isFetching) throw error; // since not all suspense errors are thrown automatically, we need to throw them manually

    return suspenseResponse
}