import { APP_URLS } from '@routes/app-urls';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useRedirectUrl = (fallbackUrl: string = APP_URLS.APP.ROOT,) => {
    const SEARCH_PARAM_KEY = 'redirect_to'
    const navigate = useNavigate();

    // fetch the redirect search param from the url; default to APP_ROOT if not found
    const [searchParams] = useSearchParams();
    const redirectUrl =
        searchParams.get(SEARCH_PARAM_KEY) || fallbackUrl;

    return {
        navigateToRedirectUrl: () => navigate(redirectUrl),
        redirectUrl,
    };
};
export default useRedirectUrl;